FROM python

WORKDIR api_service

COPY . .
RUN pip3 install --no-cache-dir -r requirements.txt

CMD ["uwsgi", "--ini", "uwsgi.ini"]
