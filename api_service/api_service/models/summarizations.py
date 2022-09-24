from peewee import *

from .base import BaseModel


class Summarization(BaseModel):
    drug_id = CharField()
    text = TextField()
    paper_count = IntegerField(default=0)

    def asdict(self):
        return {
            "id": self.id,
            "drugId": self.drug_id,
            "text": self.text,
            "paperCount": self.paper_count
        }
