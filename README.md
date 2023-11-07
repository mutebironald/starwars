# Star Wars App Setup

![Node.js](https://img.shields.io/badge/Node.js-v16.15.1-green)

The Star Wars app is a full-stack application built with Node.js that provides an interactive interface for exploring Star Wars character data. The app leverages GraphQL to retrieve information about Star Wars characters from the Star Wars API and presents it in a user-friendly manner. Users can navigate through a list of characters, view their details, and enjoy a visually appealing interface with animated elements.

## Getting Started

1. **Clone the Repository**
   ```sh
   git clone https://github.com/mutebironald/starwars.git
   cd starwars
   ```

2. **Install Dependencies**
  ```sh
  npm install
  ```
3. **Start the Server and App**
  ```sh
  npm run start
  ```

4. **Start in Development Mode**
```sh
  npm run dev
```

*****Running the application with docker*****
- Ensure that docker is installed on your system, you can download and install it from the [official website](https://www.docker.com/get-started)

- Build the Docker Image for the Frontend
```sh
cd app
```
```sh
docker build -t starwars-frontend .
```

- Run the Docker Container for the Frontend
```sh
cd server
```
```sh
docker run -p 3000:3000 -d starwars-frontend
```

- Build the Docker Image for the Backend
```sh
docker build -t starwars-backend .
```

- Run the Docker Container for the Backend
```sh
docker run -p 4000:4000 -d starwars-backend
```

- access your application on [local](http://localhost:3000)
