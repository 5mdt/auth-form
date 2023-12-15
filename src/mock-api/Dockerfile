FROM node:11-alpine
LABEL maintainer="@nett00n"
LABEL org.website="https://github.com/5mdt"
EXPOSE 80
WORKDIR /src/
COPY package.json package.json
RUN npm install
CMD [ "npm", "run", "dev", "80" ]
