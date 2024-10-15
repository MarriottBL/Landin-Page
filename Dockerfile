# Stage 1: Build React app (frontend)
FROM node:16 as build-stage

# Set working directory
WORKDIR /app

# Copy the frontend package.json and package-lock.json files and install dependencies
COPY client/package*.json ./client/
RUN cd client && npm install

# Copy the rest of the frontend files and build the React app
COPY client/ ./client/
RUN cd client && npm run build

# Stage 2: Set up Node.js server (backend)
FROM node:16 as production-stage

# Set working directory for backend
WORKDIR /app

# Copy the backend package.json and package-lock.json files and install dependencies
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy the React build from the first stage
COPY --from=build-stage /app/client/build ./server/client/build

# Copy the rest of the backend files
COPY server/ ./server/

# Expose the port that your server will run on
EXPOSE 5000

# Start the server
CMD ["npm", "start", "--prefix", "server"]
