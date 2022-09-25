from peewee import *

from .base import BaseModel


class Summarization(BaseModel):
    drug_id = CharField()

    def asdict(self):
        paper_count = None
        text = None

        for meta in self.summarization_metas:
            paper_count = meta.paper_count

        for text in self.summarization_texts:
            text = text.text

        return {
            "id": self.id,
            "drugId": self.drug_id,
            "text": text,
            "paperCount": paper_count
        }


class SummarizationMeta(BaseModel):
    summarization = ForeignKeyField(Summarization, backref="summarization_metas")
    paper_count = IntegerField()

    def asdict(self):
        return {
            "id": self.id,
            "summarizationId": self.summarization.id,
            "paperCount": self.paper_count
        }


class SummarizationText(BaseModel):
    summarization = ForeignKeyField(Summarization, backref="summarization_texts")
    text = TextField()

    def asdict(self):
        return {
            "id": self.id,
            "summarizationId": self.summarization.id,
            "text": self.text
        }

