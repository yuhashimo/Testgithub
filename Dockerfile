ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

RUN npm install --save-dev jest

# Copy the rest of the source files into the image.
COPY . .
