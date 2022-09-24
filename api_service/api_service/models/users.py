from peewee import *
import bcrypt

from .base import BaseModel


class User(BaseModel):
    username = CharField(unique=True, null=False)
    password_hash = CharField()
    is_doctor = BooleanField(default=False)

    def is_password_valid(self, password):
        return bcrypt.checkpw(password, self.password_hash.encode())

    @staticmethod
    def create_user(username, password, is_doctor):
        return User.create(
            username=username,
            password_hash=bcrypt.hashpw(password.encode(), bcrypt.gensalt()),
            is_doctor=is_doctor
        )

    def asdict(self):
        return {
            "id": self.id,
            "username": self.username,
            "isDoctor": self.is_doctor
        }
