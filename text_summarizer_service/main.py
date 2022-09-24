import redis
import json
import requests
from pubmed import get_abstracts_by_multiple_ids
from settings import logger, REDIS_HOST, REDIS_PORT, REDIS_DB, SUMMARY_URL
from summarizer import initialize_model, get_summarization
from pubmed import get_articles_id_from_term, get_abstracts_by_multiple_ids


def send_response(id: str, summary: str, paper_count: int):
    """
    Send response to API
    """

    logger.debug(f"sending requets to {SUMMARY_URL}")

    data = {"drugId": id, "paperCount": paper_count, "text": summary}
    try:
        response = requests.post(url=SUMMARY_URL, json=data)
        logger.debug(f"send response with body: {data}")

        if response.status_code == 200:
            logger.debug("response sending status: success")
        else:
            logger.debug(f"response sending status: failed ({response.status_code})")
    except Exception as e:
        logger.error(f"failed to send request to {SUMMARY_URL}: {e}")


def main():
    initialize_model()

    rd = redis.Redis(host=REDIS_HOST, port=REDIS_PORT,db=REDIS_DB)

    # read values from redis
    while True:
        req = rd.brpop("summarization_tasks")
        if req == None:
            logger.debug("got None from redis")
            continue

        req = json.loads(req[1].decode())
        logger.debug(f"id = {req['id']}, term = {req['term']}")

        id_list, paper_count = get_articles_id_from_term(req["term"])
        if id_list is None:
            logger.error(f"get_articles_id_from_term({req['term']}) returned empty result")
            # TBD: probably send error to API?
            continue

        abstracts_list = get_abstracts_by_multiple_ids(id_list)
        if abstracts_list is None:
            logger.error(f"get_abstracts_by_multiple_ids({id_list}) returned empty result")
            # TBD: probably send error to API?
            continue

        # TODO: send paper_count to /api/summarizations/meta
        logger.debug(f"paper_count = {paper_count}")

        summary = get_summarization(abstracts_list[0])
        logger.debug(f"summary = {summary}")

        send_response(req['id'], summary, 42)


if __name__ == "__main__":
    logger.info(f"starting summarization service...")
    main()
