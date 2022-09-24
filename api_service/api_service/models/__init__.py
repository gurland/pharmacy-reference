from time import sleep
import logging

from api_service.models.users import User
from api_service.models.summarizations import Summarization
from api_service.models.drugs import Drug
from api_service.models.base import db

from api_service.models.utils import load_drugs_gen

for i in range(10):
    try:
        db.create_tables([User, Summarization, Drug])

        break
    except Exception:
        sleep(1)

with db.atomic() as transaction:

    for drugs_chunk in load_drugs_gen():
        try:
            Drug.insert_many(drugs_chunk).execute()
            transaction.commit()
        except Exception as e:
            logging.error(f"Tried to SEED. ERROR: {e}")
        transaction.rollback()
        logging.error(f"Seeded DB with {len(drugs_chunk)} Drug objects.")
