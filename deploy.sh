#!/bin/bash

APP_NAME="twiinz-beard-website"

echo "Logging into Heroku container registry..."
heroku container:login

echo "Building new Docker image..."
docker build --no-cache -t main:latest .

echo "Tagging Docker image..."
docker tag main:latest registry.heroku.com/$APP_NAME/web

echo "Pushing Docker image..."
docker push registry.heroku.com/$APP_NAME/web

echo "Releasing Docker container..."
heroku container:release web -a $APP_NAME

echo "Checking process status..."
heroku ps -a $APP_NAME

echo "Tailing logs..."
heroku logs --tail -a $APP_NAME
