#!/usr/bin/env bash

set -efux

# TODO:
#   this should use the builder container;
#   mount local file system;
#   run webpack then pass to server container;
#   avoid detaching;
#   properly terminate;
#   format webpack output

docker build . --file Dockerfile --tag originalhat/typescript-ref-arch

docker run -v /Users/pipeline/workspace/typescript-ref-arch/public:/usr/share/nginx/html --detach --publish 8080:80 originalhat/typescript-ref-arch

node_modules/.bin/webpack --mode=development --output-path=public --watch
