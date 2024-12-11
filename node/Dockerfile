FROM node:18

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.8.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

CMD npm start