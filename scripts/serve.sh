#!/usr/bin/env bash

set -efux

# TODO: kill old images; only build if missing/out of date
docker build . --file Dockerfile --tag originalhat/typescript-ref-arch

docker run -v /Users/pipeline/workspace/typescript-ref-arch/public:/usr/share/nginx/html --detach --publish 8080:80 originalhat/typescript-ref-arch

node_modules/.bin/webpack --mode=development --output-path=public --watch
