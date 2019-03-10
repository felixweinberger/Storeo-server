# Create image based on latest node
FROM node:11

# Set working directory
WORKDIR /auth

# Copy the package.json and install dependencies
COPY ./package.json .
RUN npm install;

# Copy all other server files
COPY . .

# Start server
CMD ["npm", "start"]

# Expose the port for external connections
EXPOSE 3001 