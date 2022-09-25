from api_service.models import Summarization
from api_service.settings import REDIS_HOST, REDIS_PORT, REDIS_DB
import json

from redis import Redis


r = Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)


def post(body):
    summarization = Summarization.create(
        **{
            "drug_id": body.get("drugId"),
            "paper_count": body.get("paperCount"),
            "text": body.get("text")
        }
    )

    r.lpush("summarization_tasks", json.dumps(
        {
            "id": summarization.id,
            "term": body.get("term")
        }
    ))

    return summarization.asdict()


def get(summarizationId):
    return Summarization.get(id=summarizationId).asdict()


def search():
    return [
        summarization.asdict() for summarization in Summarization.select()
    ]
