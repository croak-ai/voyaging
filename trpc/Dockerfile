# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire API directory into the container
COPY . .

# Expose the port that your tRPC API listens on
EXPOSE 3000

# Command to start your tRPC API
CMD ["npm", "start"]
