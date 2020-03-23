#Using Node 10

FROM node:10

#Define Work Directory
WORKDIR /app

#Copy package.json
COPY package*.json ./

#Install node modules
RUN npm install

#COPY the source - server.js
COPY . ./

#Expose Node port to outside world
EXPOSE 3000

#Start the Node server
CMD ["npm", "start"]

