from api_service.models import Summarization, SummarizationText


def post(summarizationId, body):
    summarization = Summarization.get(id=summarizationId)
    text = body.get("text", "")

    SummarizationText.create(
        **{
            "summarization": summarization,
            "text": text,
        }
    )

    return Summarization.get(id=summarizationId).asdict()
