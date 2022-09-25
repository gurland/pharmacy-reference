# Module where stores all neural web related stuff

from transformers import PegasusForConditionalGeneration, PegasusTokenizer
from settings import USE_NEURAL_WEB_MODEL, logger

_tokenizer = None
_model = None
_pretrained_model_name = "google/pegasus-pubmed"

def initialize_model() -> None:
    """
    Initializes neural web model
    [?] TODO: add all nessessary initialization
    """

    if USE_NEURAL_WEB_MODEL == False:
        logger.info("skipping initialization since USE_NEURAL_WEB_MODEL is disabled")
        return

    logger.info("initializing tokenizer...")
    _tokenizer = PegasusTokenizer.from_pretrained(_pretrained_model_name)
    logger.info("done.")

    logger.info("initializing mode...")
    _model = PegasusForConditionalGeneration.from_pretrained(_pretrained_model_name)
    logger.info("done.")

    logger.info("initialization complete")


def run_summarization(text: str) -> str|None:
    """
    Runs neural web model to get abstract summary
    [?] TODO: implement
    [x] TODO: run initialization of models when service starts
    """

    try:
        if USE_NEURAL_WEB_MODEL == False:
            return None

        logger.info(f"input text = {text}")

        tokens = _tokenizer(text, truncation=True, padding="longest", return_tensors="pt")
        logger.info("tokenized input text")
        prediction = _model.generate(**tokens, max_new_tokens=128)
        logger.info("generated model")
        result = _tokenizer.decode(prediction[0])
        return result
    except:
        logger.error("an error occured when was running summarization")
        return None


def get_summarization(input: str) -> str|None:
    """
    Gets on input prepared text from pubmed module
    """

    try:
        summary = run_summarization(input)
        if summary == None:
            logger.debug("generating stub summary")
            return f"Some random summary from abstract for original text: {input}"
        else:
            return summary
    except:
        logger.error("an error occured when trying to get summarization")
        return None
