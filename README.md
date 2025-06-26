# 🚀 Secure S3 File Uploader Web Application

This is a full-stack web application that demonstrates how to securely upload files from a web browser directly to a private Amazon S3 bucket using pre-signed URLs. The backend generates temporary, secure links, ensuring that AWS credentials are never exposed on the client-side.

This project was developed as part of a summer internship at NIT Warangal.

<!-- Optional: Add a screenshot or GIF of your application in action -->
<!-- ![S3 Uploader Demo](./demo.gif) -->

---

## ✨ Key Features

-   **Secure by Design:** Uses the AWS S3 pre-signed URL pattern to keep cloud credentials completely on the server-side.
-   **Direct-to-S3 Uploads:** Files are sent directly from the client's browser to S3, making uploads efficient and offloading bandwidth from the application server.
-   **Modern Frontend:** A clean, responsive interface built with React.js.
-   **Drag-and-Drop Functionality:** An intuitive user experience for selecting files, powered by `react-dropzone`.
-   **Real-Time Progress Tracking:** Visual feedback for each file upload, showing the percentage complete.
-   **User Notifications:** Clear success and error messages for a better user experience, using `react-toastify`.

---

## ⚙️ How It Works: The Pre-signed URL Flow

The security of this application relies on a specific sequence of events that prevents the exposure of secret keys.

1.  **File Selection:** The user selects a file in the React frontend.
2.  **Request for Permission:** The frontend makes an API call to its **own backend server** (the Node.js/Express app), sending metadata like the filename and file type. It asks, "I need permission to upload this file."
3.  **Secure URL Generation:** The backend server, which holds the secret AWS credentials, uses the **AWS SDK** to ask S3: "Please generate a unique, temporary URL that only allows uploading a file with this specific name and type."
4.  **URL is Granted:** S3 generates a **pre-signed URL** with a short expiration time (e.g., 5 minutes) and sends it back to the backend.
5.  **URL is Passed to Frontend:** The backend sends this secure URL to the frontend.
6.  **Direct Upload:** The frontend then uses this URL to send the file data **directly to Amazon S3** via a `PUT` request. The file never passes through the backend server.

This flow ensures the application is both secure (keys never leave the server) and scalable (the server isn't burdened by file data traffic).

---

## 🛠️ Tech Stack

### Frontend
-   **React.js:** A JavaScript library for building user interfaces.
-   **Axios:** For making HTTP requests to the backend.
-   **Styled Components:** For component-level CSS styling.
-   **React-Dropzone:** For easy-to-use drag-and-drop functionality.
-   **React-Toastify:** For user-friendly notifications.
-   **Font Awesome:** For icons.

### Backend
-   **Node.js:** A JavaScript runtime for the server.
-   **Express.js:** A web application framework for Node.js.
-   **AWS SDK for JavaScript v3:** For interacting with AWS services.
    -   `@aws-sdk/client-s3`
    -   `@aws-sdk/s3-request-presigner`
-   **Dotenv:** For managing environment variables.

### Cloud & DevOps
-   **Amazon S3:** For scalable object storage.
-   **Git & GitHub:** For version control and code hosting.

---

## 🚀 Getting Started: Local Setup and Installation

To run this project locally, follow these steps.

### Prerequisites

-   Node.js and npm (or yarn) installed.
-   An active AWS account.
-   An S3 bucket created in your AWS account.
-   An IAM User with programmatic access and S3 permissions (see below).

### 1. Clone the Repository

```bash
git clone https://github.com/sabinikarisaman/S3-File-Uploader-Web-Application.git
cd S3-File-Uploader-Web-Application
Use code with caution.
Markdown
2. Configure Backend
First, set up the server.
Generated bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install
Use code with caution.
Bash
Next, create the environment variables file. This file will store your secret AWS credentials.
Generated bash
# Create the .env file from the example
cp .env.example .env
Use code with caution.
Bash
Now, open backend/.env with a text editor and fill in your AWS credentials and S3 bucket details.
Generated ini
# Your IAM user's public access key
AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY

# Your IAM user's secret key (keep this safe!)
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_KEY

# The region your S3 bucket is in (e.g., us-east-1)
AWS_S3_REGION=YOUR_AWS_S3_BUCKET_REGION

# The exact name of your S3 bucket
AWS_S3_BUCKET_NAME=YOUR_UNIQUE_S3_BUCKET_NAME
Use code with caution.
Ini
3. Configure Frontend
Now, set up the client-side application.
Generated bash
# Navigate to the frontend directory from the project root
cd ../frontend

# Install dependencies
npm install
Use code with caution.
Bash
4. Run the Application
You will need two separate terminals to run both the backend and frontend servers at the same time.
In Terminal 1 (from the backend folder):
Generated bash
npm start
Use code with caution.
Bash
The backend server will start, typically on http://localhost:5000.
In Terminal 2 (from the frontend folder):
Generated bash
npm start
Use code with caution.
Bash
The React development server will start, and your application will open in your browser at http://localhost:3000.
You can now use the application to upload files to your S3 bucket!
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
Generated code
