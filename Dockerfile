FROM node:16

RUN apt-get update -qq && apt-get install -y build-essential
RUN npm install -g typescript

# Create app directory
WORKDIR /usr/src/tododocker

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY . .
RUN tsc

EXPOSE 3000

CMD ["node","./build/app.js"]