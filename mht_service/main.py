from flask import Flask, request
import requests

app = Flask(__name__)


@app.route("/mht/", methods=["POST"])
def mht_to_utf():
    body = request.json

    return {
        "UTFContent": requests.get(
            body.get("url")
        ).content.decode("cp1251")
    }


if __name__ == '__main__':
    app.run(port=3000)
