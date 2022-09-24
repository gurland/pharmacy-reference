from api_service.models import User
from peewee import IntegrityError


def post(body):
    try:
        return User.create_user(
            body.get("username"),
            body.get("password"),
            body.get("isDoctor", False)
        ).asdict()

    except IntegrityError:
        return {"message": "User with this name already exists"}, 409
