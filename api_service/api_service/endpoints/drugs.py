from api_service.models import Drug

from peewee import fn


def search(term, limit=30):
    q = Drug.select().where(
        fn.lower(Drug.name) % ("%"+term.lower()+"%")
    )

    return [
        drug.asdict() for drug in q
    ]
