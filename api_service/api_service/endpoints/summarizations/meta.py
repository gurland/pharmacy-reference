from api_service.models import Summarization,SummarizationMeta


def post(summarizationId, body):
    summarization = Summarization.get(id=summarizationId)
    paper_count = body.get("paperCount", 0)

    SummarizationMeta.create(
        **{
            "summarization": summarization,
            "paper_count": paper_count,
        }
    )

    return Summarization.get(id=summarizationId).asdict()
