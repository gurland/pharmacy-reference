import os

REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = os.getenv("REDIS_PORT", 6378)
REDIS_DB = os.getenv("REDIS_DB", 0)

DATABASE_URI = os.getenv("DATABASE_URI", "postgresql://postgres:portwontbeopened@localhost:5432/postgres")
