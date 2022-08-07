FROM node:16

WORKDIR /usr/src/app


COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "yarn", "preview", "--host", "0.0.0.0", "--port", "8080" ]