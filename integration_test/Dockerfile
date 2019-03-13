# Create image based on latest node
FROM node:11

# Set working directory
WORKDIR /integration

# Copy the package.json and install dependencies
COPY ./package.json .
RUN npm install;

# Install netcat so wait-for.sh can be used for checking mySQL readiness
RUN apt-get update && apt-get install -y netcat;

# Copy all other server files
COPY . .