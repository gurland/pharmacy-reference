import redis
import json
import requests
from settings import logger, REDIS_HOST, REDIS_PORT, REDIS_DB, SUMMARY_URL
from summarizer import initialize_model, get_summarization


def send_response(id: str, summary: str, paper_count: int):
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

        summary = get_summarization(f"{req['id']}-{req['term']}")
        logger.debug(f"summary = {summary}")

        send_response(req['id'], summary, 42)


if __name__ == "__main__":
    logger.info(f"starting summarization service...")
    main()
