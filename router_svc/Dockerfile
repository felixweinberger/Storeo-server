# Create image based on latest node
FROM node:11

# Set working directory
WORKDIR /router

# Copy the package.json and install dependencies
COPY ./package.json .
RUN npm install && npm install -g nodemon;

# Install netcat so wait-for.sh can be used for checking mySQL readiness
RUN apt-get update && apt-get install -y netcat;

# Copy all other server files
COPY . .

# Make the wait-for script executable
RUN chmod +x './setup/wait-for.sh';

# Start server
CMD ["./setup/wait-for.sh", "store:3000", "--", "npm", "start"]

# Expose the port for external connections
EXPOSE 8080 