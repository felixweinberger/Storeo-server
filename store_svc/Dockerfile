FROM node:11

WORKDIR /server

EXPOSE 8080

COPY ./package.json .

RUN npm install;

COPY . .

ENV DB_NAME storeo_db

CMD ["npm", "start"]