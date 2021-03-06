FROM node:8.11.3

RUN mkdir -p src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3002

CMD [ "npm", "run", "start:dev" ]
