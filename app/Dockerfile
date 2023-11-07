FROM node:20.4.0

LABEL AUTHOR="Ronald Mutebi mutebironaldroninho@gmail.com"
LABEL application="starwars-frontend"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./


CMD ["npm", "run", "dev"]
