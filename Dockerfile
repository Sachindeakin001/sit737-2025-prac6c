# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .
# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
