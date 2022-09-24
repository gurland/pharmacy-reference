from .users import User
from .base import db

db.create_tables([User])
