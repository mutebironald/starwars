FROM node:16

LABEL AUTHOR="Ronald Mutebi mutebironaldroninho@gmail.com"
LABEL application="starwars-backend"

WORKDIR /usr/src/server

COPY package*.json/ ./

RUN npm install

COPY . ./

CMD ["npm", "start"]
