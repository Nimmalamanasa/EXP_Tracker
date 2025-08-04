# EXP_Tracker

EXP_Tracker is a full-stack expense tracking web application built using the MERN stack (MongoDB, Express.js, React, Node.js).  
It allows users to securely track, categorize, and visualize their expenses in a clean, responsive dashboard.

## 🚀 Features

- User authentication with JWT
- Light/dark theme toggle
- CRUD functionality for expenses
- Real-time analytics using Chart.js
- Responsive UI using Tailwind CSS
- Role-based access control (admin/user)
- MongoDB Atlas for cloud database

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Chart.js, Vite
- **Backend:** Node.js, Express.js, JWT
- **Database:** MongoDB Atlas
- **Tools:** Git, GitHub, Thunder Client

## 📦 Project Structure

EXP_Tracker/
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ └── ...
├── server/ # Node + Express backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ └── ...
└── README.md

## ⚙️ Local Setup

> You can run the client and server separately or use a tool like `concurrently`.

### Step 1: Install dependencies
```bash
cd client
npm install

cd ../server
npm install

### Environment Variables

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
