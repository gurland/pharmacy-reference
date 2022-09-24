from functools import wraps

import jwt
from flask import request, g

from api_service.settings import SECRET
from api_service.models import User


def jwt_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            try:
                jwt_token = request.headers.get("Authorization").split("Bearer ")[-1]
                g.claims = jwt.decode(jwt_token, SECRET, algorithms=["HS256"])
                g.user = User.get(id=g.claims.get("id"))
                return fn(*args, **kwargs)
            except Exception as e:
                print(e)
                return {"message": "Bad auth!"}, 401

        return decorator

    return wrapper
