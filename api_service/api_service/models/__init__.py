from .users import User
from .summarizations import Summarization
from .base import db

db.create_tables([User, Summarization])
