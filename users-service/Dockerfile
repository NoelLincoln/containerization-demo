FROM node:18

# Set the working directory
WORKDIR /app
RUN echo "Setting up working directory..."

# Copy package.json first to leverage Docker cache
COPY package.json .
RUN echo "Installing dependencies..."
RUN npm install --verbose

# Copy the rest of the application files
COPY . .
RUN echo "Application files copied."

# Expose the application port
EXPOSE 4002
RUN echo "Port 4002 exposed."

# Start the application
CMD ["node", "index.js"]
RUN echo "Starting the application..."
