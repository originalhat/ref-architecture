FROM node:latest
ADD . /app
WORKDIR /app
RUN yarn install
CMD yarn webpack --watch --mode=development

