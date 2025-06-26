# 🚀 Secure S3 File Uploader Web Application

A full-stack app that lets users upload files directly from their browser to a private Amazon S3 bucket via **pre-signed URLs**—so AWS credentials never leave your server.

> 🛠️ Built during a Summer Internship at **NIT Warangal**.

---

## ✨ Features
- 🔐 **Secure uploads** with pre-signed URLs (credentials stay server-side).
- ⚡ **Direct-to-S3 uploads** reduce backend bandwidth.
- 💻 **React frontend** with a clean, responsive UI.
- 📂 **Drag & drop** using `react-dropzone`.
- 📊 **Real-time progress** indicators.
- 🔔 **Toast notifications** via `react-toastify`.

---

## ⚙️ How It Works

1. **Select file** in the React UI.  
2. Frontend **requests a pre-signed URL** from the Node/Express backend.  
3. Backend (using AWS SDK v3) **generates the URL** and returns it.  
4. Frontend **uploads directly to S3** with that URL.  

✅ Credentials stay hidden  ✅ Uploads are fast & scalable

---

## 🛠 Tech Stack

| Layer     | Tools                                                                           |
|-----------|---------------------------------------------------------------------------------|
| Frontend  | React · Axios · Styled Components · React-Dropzone · React-Toastify · Font Awesome |
| Backend   | Node.js · Express · AWS SDK v3 (`@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`) · dotenv |
| DevOps    | Amazon S3 · Git & GitHub                                                        |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** & **npm** (or Yarn)
- An **AWS account** with:  
  - an **S3 bucket**  
  - an **IAM user** that has programmatic access and S3 permissions

### 1  Clone the repository
```bash
git clone https://github.com/sabinikarisaman/S3-File-Uploader-Web-Application.git
cd S3-File-Uploader-Web-Application
```

### 2  Set up the backend
```bash
cd backend
npm install
cp .env.example .env      # create env file
```
Open **`backend/.env`** and add your credentials:
```env
AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_KEY
AWS_S3_REGION=YOUR_AWS_REGION
AWS_S3_BUCKET_NAME=YOUR_BUCKET_NAME
```

### 3  Set up the frontend
```bash
cd ../frontend
npm install
```

### 4  Run the application  
Launch **two terminals**:

<details>
<summary>🖥️ Terminal 1 – Backend</summary>

```bash
cd backend
npm start
# → http://localhost:5000
```
</details>

<details>
<summary>🖥️ Terminal 2 – Frontend</summary>

```bash
cd frontend
npm start
# → http://localhost:3000
```
</details>

You can now open the app and start uploading files to S3. 🎉

---

## 📸 Optional Screenshot
```markdown
![Demo](./demo.gif)
```
_Uncomment the line above and add a GIF or screenshot if you have one._

---

## 📜 License
Released under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements
Thanks to the **NIT Warangal** team for guidance on secure upload patterns.
