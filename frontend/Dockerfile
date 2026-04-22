FROM node:20

WORKDIR /app

# Copy package files first (better for caching)
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

EXPOSE 3000

# React-scripts needs this to run in a container correctly
ENV CI=true
ENV WDS_SOCKET_PORT=0

CMD ["npm", "start"]