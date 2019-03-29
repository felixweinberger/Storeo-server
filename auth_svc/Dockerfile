# Create image based on latest node
FROM node:11

# Set working directory
WORKDIR /auth

# Copy the package.json and install dependencies
COPY ./package.json .
RUN npm install;

# Install netcat so wait-for.sh can be used for checking mySQL readiness
RUN apt-get update && apt-get install -y netcat;

# Copy all other server files
COPY . .

# Make the wait-for script executable
RUN chmod +x './setup/wait-for.sh';

# Start server
CMD ["./setup/wait-for.sh", "auth_db:3306", "--", "npm", "start"]

# Expose the port for external connections
EXPOSE 3001 