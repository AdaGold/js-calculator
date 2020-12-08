FROM node:15.3.0-alpine3.10

LABEL maintainer="chris.adadev.org"

RUN apk add --no-cache bash

RUN mkdir /app

WORKDIR /app

# Add entire student fork (overwrites previously added files)
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

ADD package.json .

# ADD . .

RUN rm -rf /app/node_modules

RUN npm install

ADD test.sh /app


RUN chmod +x test.sh
CMD [ "test.sh" ]
