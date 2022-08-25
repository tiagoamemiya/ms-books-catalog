FROM node:16.17.0-slim

# user
USER node:1000

WORKDIR /home/node/app

CMD ["sh", "-c", "npm install && tail -f /dev/null"]