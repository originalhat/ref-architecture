FROM node:latest
ADD . /app
WORKDIR /app
RUN yarn install
CMD yarn webpack --mode=development --output-path=/tmp/public --watch

#FROM nginx:latest
#COPY --from=0 /app/public /usr/share/nginx/html