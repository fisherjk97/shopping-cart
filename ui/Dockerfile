FROM node:12-alpine

WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]