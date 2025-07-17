# 🚀 Resume Builder

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) 
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) 
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) 
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/) 
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/) 
[![Multer](https://img.shields.io/badge/Multer-FF4A00?style=for-the-badge&logo=multer&logoColor=white)](https://github.com/expressjs/multer)

---

✨ **A beautiful, full-stack web application to create, customize, and download professional resumes!**

---

## 🌟 Features
- 🔐 User authentication (sign up, login)
- 📝 Create, edit, and delete resumes
- 🖼️ Upload profile photos and images
- 🎨 Multiple resume templates
- 📥 Download resumes as images
- 📱 Responsive and modern UI

## 🗂️ Project Structure
```
resume_builder/
  backend/      # Node.js/Express API and MongoDB models
  frontend/     # React application (Vite)
```

## ⚡ Installation

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your MongoDB connection in `backend/config/db.js` if needed.
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000) by default.

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

## 🚀 Usage
1. Register a new user or log in.
2. Create a new resume and fill in your details.
3. Upload a profile photo and any relevant images/certificates.
4. Choose a resume template and preview your resume.
5. Download your resume as an image.

## 🛠️ Technologies Used

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/>
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT"/>
  <img src="https://img.shields.io/badge/Multer-FF4A00?style=for-the-badge&logo=multer&logoColor=white" alt="Multer"/>
</p>

## 📁 Folder Overview
- `backend/` - API, authentication, resume/image upload logic
- `frontend/` - UI components, pages, context, and utilities

## 📄 License
This project is licensed under the MIT License. 