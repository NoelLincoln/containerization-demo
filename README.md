<a name="readme-top"></a>

<div align="center">

  <h3><b>Book Store Application - Containerization Demo</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📚 About the Project](#about-project)
  - [🛠️ Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [Containerization with Docker](#containerization-with-docker)
  - [Deployment with Kubernetes](#deployment-with-kubernetes)

<!-- PROJECT DESCRIPTION -->

# 📚 Book Store Application - Containerization Demo <a id="about-project"></a>

**Book Store Application** is a backend service built with Node.js and Express.js. It provides RESTful APIs for managing books, authors, and user interactions. The application is containerized using Docker and orchestrated with Kubernetes.

## 🛠️ Built With <a id="built-with"></a>

### Tech Stack <a id="tech-stack"></a>

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Containerization:** Docker
- **Orchestration:** Kubernetes

## 💻 Getting Started <a id="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- **Docker**
- **Docker Compose**
- **Kubernetes (kubectl & minikube)**

### Setup

Clone the repository:

```sh
  git clone hhttps://github.com/NoelLincoln/containerization-demo.git
  cd containerization-demo
```

### Usage

#### Running the Application with Docker Compose

To build and start all services using Docker Compose, run the command below. The services will be served

```sh
  docker-compose up --build -d
```

To stop the services:

```sh
  docker-compose down
```

To view logs for a specific service, use:

```sh
  docker logs -f <container_name>
```


### Containerization with Docker

Each service is containerized using Docker. Below is a sample **Dockerfile-Books Service**:

```dockerfile
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
EXPOSE 4001
RUN echo "Port 4001 exposed."

# Start the application
CMD ["node", "index.js"]
RUN echo "Starting the book service application..."
```

### Testing Containerization Locally

1. 


### Deployment with Kubernetes

1. **Start Minikube:**
   ```sh
   minikube start
   ```

CREATE a  user with admin privilleges to run the minikube commands

2. **Build Docker Images for Minikube:**
   ```sh
   eval $(minikube docker-env)
   docker-compose build
   ```

3. **Deploy to Kubernetes:**
   ```sh
   kubectl apply -f k8s/
   ```

4. **Check Deployment Status:**
   ```sh
   kubectl get pods
   ```

5. **Access the Application:**
   ```sh
   minikube service api-gateway
   ```


### create mongodb secrets

```
kubectl create secret generic mongodb-secret \
  --from-literal=MONGO_INITDB_ROOT_USERNAME=admin \
  --from-literal=MONGO_INITDB_ROOT_PASSWORD=securepassword

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>
