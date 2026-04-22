**🚀 Triple-Threat Multi-Stack DevOps Project**
***React | FastAPI | PostgreSQL | Docker Compose | Terraform***
![alt text](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

![alt text](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

![alt text](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

![alt text](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![alt text](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)

**📌 Project Overview**
This project is a comprehensive DevOps showcase featuring a 3-tier microservices architecture. It demonstrates the full lifecycle of a modern application—from local development and multi-container orchestration to Infrastructure as Code (IaC) provisioning and manual cloud artifact management on AWS.
The application is a PostgreSQL Data Explorer that allows users to manage tasks stored in a relational database, featuring a custom dark-mode React UI and a high-performance Python backend.
🏗️ Architecture & Tech Stack

**1. Frontend (The Presentation Tier)**
React.js: A modern Single Page Application (SPA) featuring a dark-mode dashboard.
Containerized: Built with a Node.js runtime environment for 100% deployment consistency.

**2. Backend (The Logic Tier)**
Python (FastAPI): A high-performance ASGI web framework.
Resiliency: Implemented custom Connection Retry Logic to handle database startup dependencies and race conditions during orchestration.

**3. Database (The Data Tier)**
PostgreSQL: A robust relational SQL database.
pgAdmin 4: Integrated as a management GUI for real-time data visualization and administration.
Persistence: Utilized Docker Volumes and mapped storage to ensure data durability across container lifecycles.

**4. DevOps & Cloud Infrastructure**
Docker Compose: Orchestrates the multi-container stack, internal networking, and service discovery.
Terraform: Provisions a secure 3-tier AWS architecture (VPC, Subnets, NAT Gateways, ALB).
Amazon ECR: Distributed image strategy using private AWS repositories for secure artifact storage.

**🛠️ Key DevOps Implementations**
Infrastructure as Code (IaC): Used Terraform to codify repeatable cloud environments, ensuring network isolation and security-group-level protection.
Automated Bootstrapping: Implemented servers.json configuration injection to auto-register the PostgreSQL server in pgAdmin upon startup, eliminating manual UI configuration.
Service Discovery: Leveraged Docker’s internal DNS for seamless communication between the FastAPI backend and the PostgreSQL engine using service aliases.
Artifact Lifecycle: Managed the build, tag, and manual push process to Amazon ECR using the AWS CLI and IAM-based authentication.

**🚀 Getting Started (Local Development)**
Prerequisites
Docker & Docker Compose installed.
<img width="1365" height="717" alt="image" src="https://github.com/user-attachments/assets/0b098c59-4e93-43d3-9e8e-3a6a4c9123c9" />

AWS CLI configured (for ECR pushes).
Installation & Deployment

**Access the services:**
Frontend: http://localhost:3000
<img width="1362" height="767" alt="image" src="https://github.com/user-attachments/assets/ac76be11-f68a-471e-bf7e-9cc1ec664da5" />

Backend API (Swagger): http://localhost:8000/docs
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/e750927a-8cb5-4d64-942f-b7310cff00d7" />

pgAdmin GUI: http://localhost:5050 (Login: admin@admin.com / pass)
<img width="1352" height="744" alt="image" src="https://github.com/user-attachments/assets/b3e7ec81-af6a-488f-89f5-29667be8e475" />


**🧠 Lessons Learned & Challenges**

Cross-Platform Parity: Resolved critical deployment bugs caused by Windows CRLF line endings breaking Linux-based container initialization scripts (init.sql).
Startup Resilience: Engineered a retry mechanism in Python to wait for the PostgreSQL container to become "Ready," preventing backend crashes during cold starts.
Multi-Repo Strategy: Transitioned from a single-image push to a distributed repository strategy on Amazon ECR, managing separate lifecycles for Frontend, Backend, and Database images.

**👤 Author
Solomon Esekile-Leo**
