FROM node:latest
ADD . /app
WORKDIR /app
RUN yarn install
CMD yarn webpack --mode=production

FROM nginx:1.15.3
COPY --from=0 /app/public /usr/share/nginx/html