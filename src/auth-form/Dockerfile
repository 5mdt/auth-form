FROM node:21-alpine
LABEL MAINTAINER="@nett00n"
EXPOSE 80
WORKDIR /src/
COPY package.json package.json
RUN npm install
COPY app.js app.js
CMD [ "npm", "run", "dev" ]
