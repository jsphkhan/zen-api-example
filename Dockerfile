#Using Node 10

FROM node:10

#install PM2 inside image
RUN npm install pm2 -g

#Define Work Directory
WORKDIR /app

#Copy package.json
COPY package*.json ./

#Install node modules
RUN npm install

#COPY the source - server.js
COPY . ./

#Expose Node Express app port to outside world
EXPOSE 8081

#Start the Node server using PM2
CMD ["pm2-runtime", "server.js"]

