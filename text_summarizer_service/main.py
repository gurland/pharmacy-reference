import redis
import json
from pubmed import get_abstracts_by_multiple_ids
from settings import logger, REDIS_HOST, REDIS_PORT, REDIS_DB
from summarizer import initialize_model, get_summarization
from pubmed import get_articles_id_from_term, get_abstracts_by_multiple_ids
from api import SummaryAPI


def main():
    initialize_model()

    rd = redis.Redis(host=REDIS_HOST, port=REDIS_PORT,db=REDIS_DB)

    # read values from redis
    while True:
        req = rd.brpop("summarization_tasks")
        if req is None:
            logger.debug("got None from redis")
            continue

        req = json.loads(req[1].decode())
        term = req["term"]
        drug_id = req["drug_id"]
        logger.debug(f"drug_id = {drug_id}, term = {term}")

        summary = SummaryAPI()

        id_list, paper_count = get_articles_id_from_term(term)
        if id_list is None:
            logger.error(f"get_articles_id_from_term({term}) returned empty result")
            # TBD: probably send error to API?
            continue

        abstracts_list = get_abstracts_by_multiple_ids(id_list)
        if abstracts_list is None:
            logger.error(f"get_abstracts_by_multiple_ids({id_list}) returned empty result")
            # TBD: probably send error to API?
            continue

        if summary.send_new(drug_id) is None:
            logger.error(f"failed to send summary creation request (drug_id = {summary.drug_id})")
            continue

        if summary.send_meta(paper_count) is None:
            logger.error(f"failed to update summary metadata (drug_id = {summary.drug_id})")
            continue

        text = get_summarization(abstracts_list[0])
        if text is None:
            logger.error(f"failed to generate summarization")
            continue
            
        logger.debug(f"summary = {text}")

        if summary.send_text(text) is None:
            logger.error(f"failed to update summary text (drug_id = {summary.drug_id}")
            continue


if __name__ == "__main__":
    logger.info(f"starting summarization service...")
    main()
