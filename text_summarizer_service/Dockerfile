FROM huggingface/transformers-pytorch-cpu

COPY . app
WORKDIR app/

RUN pip install -r requirements.txt

CMD python3 main.py
