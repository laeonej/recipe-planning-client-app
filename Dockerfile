
FROM node:20-alpine

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package*.json /app

RUN yarn install
RUN yarn tsc --init

# Copying all the files in our project
COPY . .

CMD ["yarn", "start"]