from node:7.10.1

WORKDIR /usr/src/app

ADD ./app/package.json /usr/src/app/package.json

RUN npm install -g loopback-cli
RUN npm i

ADD ./app /usr/src/app

EXPOSE 3000

CMD ['npm run start']