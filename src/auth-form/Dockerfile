FROM node:21-alpine
LABEL maintainer="@nett00n"
LABEL org.website="https://github.com/5mdt"
EXPOSE 80
WORKDIR /src/
COPY package.json package.json
RUN npm install
COPY app.js app.js
CMD [ "npm", "run", "dev" ]
