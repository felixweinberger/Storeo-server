# Create image based on latest node
FROM node:11

# Set working directory
WORKDIR /payments

# Copy the package.json and install dependencies
COPY ./package.json .
RUN npm install && npm install -g nodemon;

# Copy all other server files
COPY . .

# Start server
CMD ["node", "index.js"]

# Expose the port for external connections
EXPOSE 3001 