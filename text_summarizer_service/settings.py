import os
import logging

SUMMARY_URL = os.getenv("SUMMARY_URL", "http://nginx:80/api/summarizations")
PUBMED_BASE_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
PUBMED_SEARCH_URL = f"{PUBMED_BASE_URL}/esearch.fcgi?db=pubmed&term={{term}}"
PUBMED_FETCH_URL = f"{PUBMED_BASE_URL}/efetch.fcgi?db=pubmed&id={{article_id}}&rettype=xml&retmode=text"

REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = os.getenv("REDIS_PORT", 6379)
REDIS_DB = os.getenv("REDIS_DB", 0)

FORMAT = "[%(asctime)s] (%(funcName)s) <%(levelname)s>: %(message)s"
logging.basicConfig(level=logging.DEBUG, format=FORMAT)
logger = logging.getLogger("summarizator")
