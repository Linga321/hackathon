# pull base image
FROM node:16.15.1

WORKDIR /tracks

COPY package.json .


RUN npm install && npm install -g expo-cli

COPY . .

EXPOSE 19002

CMD [ "npm", "start" ]