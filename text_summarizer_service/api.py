# Store all backend API related functions here

from typing import Any
from typing_extensions import Self
import json
import requests
from settings import META_SUMMARY_URL, SUMMARY_URL, TEXT_SUMMARY_URL, logger


class SummaryAPI:
    db_id = str()
    drug_id = str()
    paper_count = 0
    text = str()


    # def _check_response_status(self, response: requests.Response) -> bool:
    #     """
    #     Check response status
    #     """

    #     if response.status_code == 200:
    #         logger.debug("response sending status: success")
    #         return True
    #     else:
    #         logger.debug(f"response sending status: failed ({response.status_code})")
    #         return False


    def to_json(self) -> str:
        """
        Serialize object to JSON. Return JSON string
        """
        return json.dumps(self, default=vars)


    def from_json(self, string: str) -> Self:
        """
        Deserialize object from JSON. Returns instance of new Summary object
        """
        return json.loads(string)


    def send_request(self, url: str, payload: Any) -> requests.Response|None: 
        """
        Send request to API
        """

        logger.debug(f"sending request to {url}")

        try:
            response = requests.post(url=url, json=payload)
            logger.debug(f"sent request with payload: {payload}")
            return response
        except Exception as e:
            logger.error(f"failed to send request to {SUMMARY_URL}: {e}")
            return None


    # TODO: replace from_json. Don't need to overwrite whole object, when can just update one field
    def send_meta(self, paper_count: int) -> Self|None:
        """
        Send meta information to API
        """
        response = self.send_request(META_SUMMARY_URL.format(id=self.db_id), {"drugId": self.drug_id, "paperCount": paper_count})
        if response == None:
            logger.error("failed to send_request")
            return None

        if response.status_code == 200:
            self = self.from_json(response.text)
            logger.info(f"update after send_meta: {self}")
            return self
        else:
            return None


    # TODO: replace from_json. Don't need to overwrite whole object, when can just update one field
    def send_text(self, text: str) -> Self|None:
        """
        Send text(summary) to update previously created summary
        """
        response = self.send_request(TEXT_SUMMARY_URL.format(id=self.db_id), {"drugId": self.drug_id, "text": text})
        if response == None:
            logger.error("failed to send_request")
            return None

        if response.status_code == 200:
            self = self.from_json(response.text)
            logger.info(f"update after send_text: {self}")
            return self
        else:
            return None
