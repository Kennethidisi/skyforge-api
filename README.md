# 🚀 SkyForge API — DevOps CI/CD Pipeline Project

A production-style DevOps project demonstrating how to build, containerize, and deploy a backend application using a fully automated CI/CD pipeline.

---

## 📌 Project Overview

SkyForge API is a simple Node.js backend service designed to showcase real-world DevOps practices.

This project goes beyond just building an application — it demonstrates how to:

* Containerize applications with Docker
* Automate testing and builds using GitHub Actions
* Push Docker images to Docker Hub
* Deploy applications automatically to AWS Elastic Beanstalk
* Use environment variables in production
* Implement a branch-based workflow

---

## ⚙️ Tech Stack

* **Backend:** Node.js (Express)
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Container Registry:** Docker Hub
* **Cloud Platform:** AWS Elastic Beanstalk

---

## 🔁 CI/CD Pipeline Flow

```
Developer → GitHub → GitHub Actions → Docker Hub → AWS Elastic Beanstalk → Users
```

### On every merge to `main`:

* ✅ Run automated tests
* 🐳 Build Docker image
* 📦 Push image to Docker Hub
* ☁️ Deploy automatically to AWS Elastic Beanstalk

---

## 🌐 Live Endpoints

Once deployed, the API exposes the following endpoints:

* `GET /` → API status
* `GET /health` → Health check
* `GET /api/info` → App metadata (name, version, environment)
* `GET /api/time` → Server time

---

## 📁 Project Structure

```
skyforge-api/
│
├── src/
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── app.test.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── Dockerfile
├── Dockerrun.aws.json
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

## 🧪 Running Locally

### 1. Clone the repository

```
git clone https://github.com/Kennethidisi/skyforge-api.git
cd skyforge-api
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app

```
npm run dev
```

### 4. Run tests

```
npm test
```

---

## 🐳 Run with Docker

### Build image

```
docker build -t skyforge-api .
```

### Run container

```
docker run -p 3000:3000 \
  -e PORT=3000 \
  -e APP_NAME="SkyForge API" \
  -e APP_VERSION=1.0.0 \
  -e NODE_ENV=production \
  skyforge-api
```

---

## ☁️ Deployment (AWS Elastic Beanstalk)

Deployment is fully automated via GitHub Actions.

### Key Components:

* `Dockerrun.aws.json` → tells AWS which Docker image to run
* GitHub Actions → handles build, push, and deploy
* AWS Elastic Beanstalk → hosts the application

---

## 🔐 Environment Variables

Configured in AWS Elastic Beanstalk:

```
PORT=3000
APP_NAME=SkyForge API
APP_VERSION=1.0.0
NODE_ENV=production
```

---

## 🔀 Branching Strategy

* `main` → production (triggers deployment)
* `dev` → integration

---

## 💡 Key Learnings

* CI/CD pipelines require precision — small mistakes can break the entire workflow
* Docker image tagging (latest vs SHA) is critical for traceability
* AWS deployment involves more than just pushing code — understanding the platform matters
* Debugging pipelines is where real DevOps learning happens

---

## 📈 Future Improvements

* Use image SHA for deployments instead of `latest`
* Add staging environment
* Implement AWS OIDC (remove static credentials)
* Add logging and monitoring (CloudWatch)
* Optimize Docker image with multi-stage builds

---

## 🙌 Conclusion

This project represents a complete DevOps workflow:

From writing code → to deploying it in the cloud automatically.

---

## 📎 Author

**Kenneth Idisi**

* GitHub: https://github.com/Kennethidisi
* LinkedIn: https://www.linkedin.com/in/idisi

---

## ⭐ If you found this useful

Give it a star and feel free to fork 🚀
