# Use a Node.js image to build the React app
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY ./package.json ./
RUN npm install

# Copy the rest of the frontend code into the container
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight server to serve the built files
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the frontend port
EXPOSE 3000
