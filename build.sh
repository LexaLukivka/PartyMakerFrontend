#!/bin/bash

docker-compose down
git pull origin master
yarn build
docker-compose build frontend
docker-compose up
