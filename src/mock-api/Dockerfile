FROM node:11-alpine
LABEL MAINTAINER="@nett00n"
EXPOSE 3000
WORKDIR /src/
COPY package.json package.json
RUN npm install
CMD [ "npm", "run", "dev" ]
