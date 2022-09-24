from peewee import *
from playhouse.db_url import connect
from ..settings import DATABASE_URI

# db = SqliteDatabase('people.db')
db = connect(DATABASE_URI)


class BaseModel(Model):
    class Meta:
        database = db
