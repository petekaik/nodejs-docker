FROM node:8

# set maintainer
LABEL maintainer "petteri.kaikkonen@gmail.com"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
#COPY . .
COPY *.js ./

# set a health check
HEALTHCHECK --interval=5s \
    --timeout=5s \
    CMD curl -f http://127.0.0.1:8080 || exit 1

# Expose relevant port(s)
EXPOSE 8080

# Run
CMD [ "npm", "start" ]
