import jwt

from api_service.models import User
from api_service.settings import SECRET


def post(body):
    try:
        user = User.get(username=body.get("username"))
    except User.DoesNotExist:
        return {"message": "User does not exist"}, 404

    if user.is_password_valid(body.get("password")):
        encoded_jwt = jwt.encode(
            {
                "id": user.id,
                "username": user.username,
                "isDoctor": user.is_doctor
            },
            SECRET,
            algorithm="HS256"
        )

        return {"access_token": encoded_jwt}
    else:
        return {"message": "User password is incorrect"}, 401
