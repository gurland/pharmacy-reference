# Send request to PubMed API to get abstract/summary/full article/TBD
# Parse result and prepare for neural web (remove extra punctuation)

import requests
from xml.dom.minidom import parseString, Node
from settings import PUBMED_SEARCH_URL, PUBMED_FETCH_URL, logger


def prepare_input(input: str) -> str:
    return input


def get_articles_id_from_term(term: str) -> tuple[list,int]|None:
    """
    Send GET request to PubMed to search by term to get number of articles, list of id of articles
    URL example: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=<term>
    """
    try:
        url = PUBMED_SEARCH_URL.format(term=term)
        response = requests.get(url=url)

        doc = parseString(response.text)
        paper_count = doc.getElementsByTagName("Count")[0].firstChild.nodeValue
        id_list = doc.getElementsByTagName("Id")
        id_list = list(map(lambda id: id.firstChild.nodeValue, id_list))

        logger.debug(f"paper_count = {paper_count}")
        logger.debug(f"id_list = {id_list}")

        return id_list, paper_count
    except:
        logger.error("failed to send GET request to PubMed API")
        return None


def get_abstract_by_id(article_id: str) -> str|None:
    """
    Send GET request to PubMed to get abstact of article
    URL example: get abstract text: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=<id>&rettype=xml&retmode=text
    """

    try:
        url = PUBMED_FETCH_URL.format(article_id=article_id)
        response = requests.get(url=url)

        doc = parseString(response.text)
        node = doc.getElementsByTagName("AbstractText")[0]

        return node.firstChild.nodeValue
    except:
        logger.error("failed to send GET request to PubMed API")
        return None


def parse_abstracts_to_list(abstracts_list) -> list[str]|None:
    """
    Parsing results from PubMed XML to list of strings
    """
    try:
        results = list()
        for node in abstracts_list:
            if len(node.firstChild.childNodes) > 1:
                abstracts = node.firstChild.childNodes
                abstracts = list(map(
                    lambda abstract: (
                        abstract.nodeValue 
                            if abstract.nodeType == Node.TEXT_NODE
                            else abstract.firstChild.nodeValue
                ), abstracts))
                abstracts = "".join(abstracts)
                
                results.append(abstracts)
            else:
                abstract = node.firstChild.firstChild.nodeValue
                
                results.append(abstract)
        return results
    except:
        logger.error("an error occured while parsing multiple abstracts")
        return None


def get_abstracts_by_multiple_ids(ids: list[str]) -> list|None:
    """
    Send GET request to PubMed to get abstracts of multiple articles
    """
    try:
        article_ids = ",".join(ids)
        url = PUBMED_FETCH_URL.format(article_id=article_ids)
        logger.debug(f"url = {url}")
        response = requests.get(url=url)

        doc = parseString(response.text)
        nodes = doc.getElementsByTagName("Abstract")
        abstract_list = parse_abstracts_to_list(nodes)

        return abstract_list
    except:
        logger.error("failed to send GET request to PubMed API")
        return None
