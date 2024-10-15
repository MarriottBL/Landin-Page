# Stage 1: Build React app (client)
FROM node:16 as build-stage

WORKDIR /app

# Copy and install client dependencies
COPY client/package*.json ./client/
RUN cd client && npm install

# Copy all client files and build the React app
COPY client/ ./client/
RUN cd client && npm run build

# Stage 2: Setup Node.js server (server)
FROM node:16 as production-stage

WORKDIR /app

# Copy and install server dependencies
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy the React build from Stage 1 to the server
COPY --from=build-stage /app/client/build ./server/client/build

# Copy the remaining server files
COPY server/ ./server/

EXPOSE 5000

CMD ["npm", "start", "--prefix", "server"]
