from peewee import *
from .base import BaseModel


class User(BaseModel):
    username = CharField(unique=True)
    password_hash = CharField()
    is_teacher = BooleanField(default=False)

    def is_password_valid(self, password):
        return self.password_hash == password

    @staticmethod
    def create_user(username, password, is_teacher):
        return User(
            username=username,
            password_hash=password,
            is_teacher=is_teacher
        )

    def _asdict(self):
        return {
            "id": self.id,
            "username": self.username,
            "isTeacher": self.is_teacher
        }
