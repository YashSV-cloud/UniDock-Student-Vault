# UniDock-Student-Vault
# 🎓 UniDock Student Vault

UniDock Student Vault is a simple Node.js web application that allows a university
to store and manage student information such as name, email, and password.

The application runs locally using Node.js and Express, while MongoDB runs in an
isolated Docker container, demonstrating real-world backend and DevOps practices.

---

## 🚀 Features
- Add student details using an HTML form
- Store student data in MongoDB
- MongoDB runs inside an isolated Docker container
- Clean project structure
- Environment-based configuration
- Beginner-friendly and interview-ready

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Docker
- HTML & CSS

## 📁 Project Structure 

- public/         → HTML frontend
- server.js       → Express server
- db.js           → MongoDB connection
- .env.example    → Environment variables template
- package.json    → Dependencies

## 🚀 Running the Application

## Create a Docker network (optional but recommended)
docker network create university-network

## Run MongoDB in an isolated Docker container
docker run -d \
--name university-mongo \
--network university-network \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=<username> \
-e MONGO_INITDB_ROOT_PASSWORD=<password> \
mongo

## Install project dependencies
npm install

## Start the Node.js application
npm start

## Open the application in the browser
http://localhost:5000
