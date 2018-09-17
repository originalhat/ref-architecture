#!/usr/bin/env bash

set -efux

# TODO:
#   use builder container
#   copy and build in server container

node_modules/.bin/webpack --mode=production --output-path=public

docker build . --file Dockerfile --tag originalhat/typescript-ref-arch

# docker push originalhat/typescript-ref-arch:latest

# cf push typescript-ref-arch --docker-image originalhat/typescript-ref-arch
