# 🚀 Secure S3 File Uploader Web Application

This is a full-stack web application that securely uploads files from a browser directly to a private Amazon S3 bucket using pre-signed URLs. The backend generates temporary, secure links, ensuring AWS credentials are never exposed on the client-side.

> 🛠️ Developed as part of a Summer Internship at **NIT Warangal**.

---

## ✨ Features

- 🔐 **Secure Uploads:** Files are uploaded using pre-signed S3 URLs to keep AWS credentials private.
- ⚡ **Direct-to-S3 Uploads:** Bypass the backend for file data, improving performance and scalability.
- 💻 **React Frontend:** Clean and responsive UI built with React.js.
- 📂 **Drag & Drop Support:** Enhanced UX using `react-dropzone`.
- 📊 **Progress Indicator:** Real-time file upload status.
- 🔔 **User Notifications:** Success & error feedback with `react-toastify`.

---

## ⚙️ How It Works (Pre-signed URL Flow)

1. User selects a file in the frontend.
2. Frontend sends metadata (name, type) to backend (Node.js).
3. Backend uses AWS SDK to generate a pre-signed S3 upload URL.
4. Backend returns this URL to the frontend.
5. Frontend uploads the file **directly to S3** using the pre-signed URL.

✅ Keeps credentials secure  
✅ Makes uploads efficient

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- Styled Components
- React Dropzone
- React Toastify
- Font Awesome

### Backend
- Node.js
- Express.js
- AWS SDK v3 (`@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`)
- Dotenv

### DevOps & Cloud
- AWS S3
- Git & GitHub

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js & npm (or Yarn)
- AWS Account with:
  - An S3 Bucket
  - An IAM User with programmatic access & S3 permissions

---

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/sabinikarisaman/S3-File-Uploader-Web-Application.git
cd S3-File-Uploader-Web-Application
⚙️ 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
cp .env.example .env
Edit the .env file with your AWS credentials:

env
Copy
Edit
AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_KEY
AWS_S3_REGION=YOUR_AWS_REGION
AWS_S3_BUCKET_NAME=YOUR_BUCKET_NAME
💻 3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
🏁 4. Run the Application
Use two separate terminals:

Terminal 1 - Backend
bash
Copy
Edit
cd backend
npm start
Runs on: http://localhost:5000

Terminal 2 - Frontend
bash
Copy
Edit
cd frontend
npm start
Runs on: http://localhost:3000

📸 Optional: Add a Screenshot
You can add a demo GIF or screenshot like this:

markdown
Copy
Edit
![Demo](./demo.gif)
📜 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Thanks to the NIT Warangal summer internship team for mentorship and guidance on secure file upload mechanisms.

yaml
Copy
Edit

---

Let me know if you'd like to include badges (build status, license, etc.), a contributors section, or deployment steps (e.g., Vercel, Netlify, Render).








