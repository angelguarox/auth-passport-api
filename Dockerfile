FROM node:14

RUN mkdir -p /app/passport-login

WORKDIR /app/passport-login

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
