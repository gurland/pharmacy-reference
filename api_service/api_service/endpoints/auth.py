from functools import wraps

import jwt
from flask import request

from api_service.settings import SECRET


def jwt_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            try:
                jwt_token = request.headers.get("Authorization").split("Bearer ")[-1]
                claims = jwt.decode(jwt_token, SECRET, algorithms=["HS256"])
                request.__setattr__("claims", claims)

                return fn(*args, **kwargs)
            except:
                return {"message": "Bad auth!"}, 401

        return decorator

    return wrapper