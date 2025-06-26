🚀 Secure S3 File Uploader Web Application
This is a full-stack web application that securely uploads files from a web browser directly to a private Amazon S3 bucket using pre-signed URLs. The backend generates temporary, secure links to ensure that AWS credentials are never exposed on the client-side.

This project was developed as part of a summer internship at NIT Warangal.

<!-- Optional: Add a screenshot or GIF --> <!-- ![S3 Uploader Demo](./demo.gif) -->
✨ Key Features
🔐 Secure by Design: Uses AWS S3 pre-signed URLs to keep credentials safe.

⚡ Direct-to-S3 Uploads: Uploads go straight from the browser to S3, reducing backend load.

💻 Modern Frontend: Clean and responsive UI built using React.js.

📂 Drag-and-Drop Uploads: Seamless UX with react-dropzone.

📊 Real-Time Progress: Displays upload progress dynamically.

✅ Toast Notifications: User feedback using react-toastify.

⚙️ How It Works: The Pre-signed URL Flow
The application uses a secure flow for uploading files:

User selects a file in the frontend (React).

The frontend requests a pre-signed URL from the backend (Node.js/Express).

The backend uses the AWS SDK to generate a pre-signed URL with limited-time upload access.

This URL is returned to the frontend.

The frontend uploads the file directly to S3 using the pre-signed URL.

✅ This keeps AWS credentials hidden and improves performance.

🛠️ Tech Stack
Frontend
React.js

Axios

Styled Components

React Dropzone

React Toastify

Font Awesome

Backend
Node.js

Express.js

AWS SDK v3

@aws-sdk/client-s3

@aws-sdk/s3-request-presigner

dotenv

Cloud & DevOps
Amazon S3

Git & GitHub

🚀 Getting Started
✅ Prerequisites
Node.js and npm (or Yarn)

AWS account with:

An S3 bucket

An IAM User with programmatic access and S3 permissions

🔧 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/sabinikarisaman/S3-File-Uploader-Web-Application.git
cd S3-File-Uploader-Web-Application
⚙️ 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create your environment variables:

bash
Copy
Edit
cp .env.example .env
Now edit .env and provide your AWS credentials:

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
🏃‍♂️ 4. Run the Application
Open two terminals:

Terminal 1: Start Backend
bash
Copy
Edit
cd backend
npm start
Runs at: http://localhost:5000

Terminal 2: Start Frontend
bash
Copy
Edit
cd frontend
npm start
Runs at: http://localhost:3000

You can now open the app and upload files to your S3 bucket 🎉

📜 License
This project is licensed under the MIT License.
