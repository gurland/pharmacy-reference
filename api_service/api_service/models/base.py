from time import sleep

from peewee import *
from playhouse.db_url import connect
from api_service.settings import DATABASE_URI

# db = SqliteDatabase('people.db')

for i in range(10):
    try:
        db = connect(DATABASE_URI)
        break
    except Exception:
        sleep(1)


class BaseModel(Model):
    class Meta:
        database = db
