from settings import logger
import pubmed

def initialize_model():
    """
    Initializes neural web model
    TODO: add all nessessary initialization
    """
    logger.debug("Initialized model")
    pass


def summarize(text: str) -> str|None:
    """
    Runs neural web model to get abstract summary
    TODO: implement
    TODO: run initialization of models when service starts
    """
    return None


def get_summarization(input: str) -> str|None:
    """Gets on input prepared text from pubmed module"""

    prepared_input = pubmed.prepare_input(input)

    summary = summarize(prepared_input)
    if summary == None:
        logger.debug("sending stub summary")
        return f"Some random summary from abstract for original text: {input}"
    else:
        logger.debug("NOT SUPPORTED")
        logger.debug("Actual summarization with neural web is not available at the moment")
        return None
