# Use a Node.js image to run the backend server
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /index

# Copy the package.json and install dependencies
COPY ./package.json ./
RUN npm install

# Copy the rest of the backend code into the container
COPY . .

# Set the command to start the backend server
CMD ["npm", "start"]

# Expose the backend port
EXPOSE 5000
