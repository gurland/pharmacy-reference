from api_service.models import Summarization


def post(body):
    return Summarization.create(
        **{
            "drug_id": body.get("drugId"),
            "paper_count": body.get("paperCount"),
            "text": body.get("text")
        }
    ).asdict()


def search():
    return [
        summarization.asdict() for summarization in Summarization.select()
    ]
