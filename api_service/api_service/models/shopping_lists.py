from peewee import *

from .base import BaseModel
from .users import User
from .drugs import Drug


class ShoppingList(BaseModel):
    user = ForeignKeyField(User, backref="shopping_lists")
    name = CharField(null=True)

    def get_drugs_list(self):
        return [drug.asdict() for drug in self.shopping_list_drugs]

    def asdict(self):
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.user.id,
            "drugs": self.get_drugs_list()
        }


class ShoppingListDrug(BaseModel):
    shopping_list = ForeignKeyField(ShoppingList, backref="shopping_list_drugs")
    drug = ForeignKeyField(Drug, backref="drugs")

    def asdict(self):
        return self.drug.asdict()
