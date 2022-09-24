import os
import logging

SUMMARY_URL = os.getenv("SUMMARY_URL", "http://nginx:80/api/summarizations")

REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = os.getenv("REDIS_PORT", 6379)
REDIS_DB = os.getenv("REDIS_DB", 0)

FORMAT = "[%(asctime)s] (%(funcName)s) <%(levelname)s>: %(message)s"
logging.basicConfig(level=logging.DEBUG, format=FORMAT)
logger = logging.getLogger("summarizator")
