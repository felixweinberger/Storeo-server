# Create image based on latest node
FROM node:11

# Set working directory
WORKDIR /server

# Copy the package.json and install dependencies
COPY ./package.json .
RUN npm install;

# Copy all other server files
COPY . .

# Start server
CMD ["npm", "start"]

# Expose the port for external connections
EXPOSE 8080
