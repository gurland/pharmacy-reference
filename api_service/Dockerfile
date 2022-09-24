FROM python

WORKDIR app

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt
copy . .

CMD ["uwsgi", "--ini", "uwsgi.ini"]
