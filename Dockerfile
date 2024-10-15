# Stage 1: Build React app (client)
FROM node:16 as build-stage

# Set working directory for the build stage
WORKDIR /app

# Copy and install client dependencies
COPY client/package*.json ./client/
RUN cd client && npm install

# Copy all client files and build the React app
COPY client/ ./client/
RUN cd client && npm run build

# Stage 2: Setup Node.js server (server)
FROM node:16 as production-stage

# Set working directory for the backend
WORKDIR /app

# Copy and install server dependencies
COPY server/package*.json ./Server/
RUN cd server && npm install

# Copy the React build from Stage 1 to the server
COPY --from=build-stage /app/client/build ./Server/client/build

# Copy the remaining server files
COPY Server/ ./Server/

# Expose the port that your server is running on
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start", "--prefix", "server"]
