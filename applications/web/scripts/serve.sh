#!/usr/bin/env bash

set -efux

docker run \
    -- /Users/pipeline/workspace/ref-architecture/applications/web/public:/usr/share/nginx/html \
    --detach \
    --publish 8080:80 nginx:latest

node_modules/.bin/webpack --mode=development --output-path=public --watch
