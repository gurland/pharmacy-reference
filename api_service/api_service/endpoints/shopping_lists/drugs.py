from api_service.models import ShoppingList, ShoppingListDrug, Drug
from api_service.endpoints.auth import jwt_required

from flask import request, g


@jwt_required()
def post(shopping_list_id, body):
    drug_id = body.get("drugId")
    drug = Drug.get(id=drug_id)
    shopping_list = ShoppingList.get(id=shopping_list_id)
    return ShoppingListDrug.create(
        drug=drug,
        shopping_list=shopping_list
    ).asdict()


@jwt_required()
def search(shopping_list_id):
    shopping_list = ShoppingList.get(id=shopping_list_id)
    return shopping_list.as_dict()
