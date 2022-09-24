from time import sleep

from .users import User
from .summarizations import Summarization
from .base import db

for i in range(10):
    try:
        db.create_tables([User, Summarization])
        break
    except Exception:
        sleep(1)
