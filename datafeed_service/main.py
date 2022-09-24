import os
import time
import json
import random
import string

from redis import Redis

REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = os.getenv("REDIS_PORT", 6378)
REDIS_DB = os.getenv("REDIS_DB", 0)


r = Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)


if __name__ == '__main__':
    while True:
        r.lpush("summarization_tasks", json.dumps(
            {
                "id": ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10)),
                "term": f"Drug {time.time()}"
            }
        ))

        time.sleep(60)
