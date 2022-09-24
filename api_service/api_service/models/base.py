from time import sleep

from peewee import *
from playhouse.db_url import connect
from api_service.settings import DATABASE_URI

# db = SqliteDatabase('people.db')
db = connect(DATABASE_URI)



class BaseModel(Model):
    class Meta:
        database = db
