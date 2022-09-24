import connexion
from connexion.resolver import RestyResolver
import logging
from flask_cors import CORS

from api_service.models.base import db, DATABASE_URI


def create_app() -> connexion.App:
    """Creates a connexion flask app with RestyResolver.
    Returns:
        A Flask app that will automatically handles HTTP requests defined in openapi.yaml using
        functions in endpoints module.
    """
    app = connexion.App(__name__)
    app.add_api(
        "openapi.yaml",
        resolver=RestyResolver("api_service.endpoints"),
        base_path="/api",
        strict_validation=True,
    )
    CORS(
        app.app,
    )

    @app.app.teardown_appcontext
    def shutdown_session(*args, **kwargs) -> None:
        db.close()

    logging.debug(f"RDS: {DATABASE_URI}")
    return app


logging.basicConfig(level=logging.INFO)
app = create_app()
application = app.app

if __name__ == '__main__':
    # run our standalone gevent server
    app.run(port=8080)
