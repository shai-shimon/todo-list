FROM node:14.9
 
WORKDIR /usr/src/app
ADD package.json /usr/src/app/package.json

COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 5000
 
CMD [ "npm", "start" ]