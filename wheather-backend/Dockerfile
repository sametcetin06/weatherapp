FROM python:3.8.3

ENV PYTHONUNBUFFERED 1

RUN mkdir /backend

WORKDIR /backend

ADD /requirements.txt /backend/

COPY /init.sh /backend/

ADD /init.sh /backend/

RUN pip install -r requirements.txt

COPY . /backend