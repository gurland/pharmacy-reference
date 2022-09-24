from flask import Flask, request
import requests

from logging.config import dictConfig

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'DEBUG',
        'handlers': ['wsgi']
    }
})

app = Flask(__name__)


@app.route("/")
def index():
    return {"success": "success"}


@app.route("/mht/", methods=["POST"])
def mht_to_utf():
    body = request.json

    return {
        "UTFContent": requests.get(
            body.get("url")
        ).content.decode("cp1251")
    }


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000)
