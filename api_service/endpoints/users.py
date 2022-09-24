# our memory-only pet storage
PETS = {}


def post(body):
    return body

# exists = pet_id in PETS
#     pet['id'] = pet_id
#     if exists:
#         logging.info('Updating pet %s..', pet_id)
#         PETS[pet_id].update(pet)
#     else:
#         logging.info('Creating pet %s..', pet_id)
#         pet['created'] = datetime.datetime.utcnow()
#         PETS[pet_id] = pet
#     return NoContent, (200 if exists else 201)