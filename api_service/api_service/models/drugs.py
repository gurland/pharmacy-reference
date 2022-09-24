from peewee import *

from .base import BaseModel


class Drug(BaseModel):
    id = CharField(unique=True, primary_key=True)
    name = TextField()
    generic_name = TextField()
    form_factor = TextField()
    components = TextField()
    drug_class = TextField()
    producer = TextField()
    country = CharField()
    reg_id = CharField()
    is_recipe_needed = CharField(null=True)
    is_imunobiologic = BooleanField()
    is_homeopaty = BooleanField()
    is_biologic = BooleanField()
    is_herbal = BooleanField()
    instructuion_url = TextField(null=True)

    def asdict(self):
        return {
            "id": self.id,
            "name": self.name,
            "generic_name": self.generic_name,
            "form_factor": self.form_factor,
            "components": self.components,
            "drug_class": self.drug_class,
            "producer": self.producer,
            "country": self.country,
            "reg_id": self.reg_id,
            "is_recipe_needed": self.is_recipe_needed,
            "is_imunobiologic": self.is_imunobiologic,
            "is_homeopaty": self.is_homeopaty,
            "is_biologic": self.is_biologic,
            "is_herbal": self.is_herbal,
            "instructuion_url": self.instructuion_url
        }
