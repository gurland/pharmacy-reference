from api_service.models import ShoppingList
from api_service.endpoints.auth import jwt_required

from flask import request, g


@jwt_required()
def post(body):
    return ShoppingList.create(
        **{
            "user": g.user,
            "name": body.get("name")
        }
    ).asdict()


@jwt_required()
def search():
    return [
        shopping_list.asdict()
        for shopping_list in ShoppingList.select().where(
            ShoppingList.user == g.user
        )
    ]
