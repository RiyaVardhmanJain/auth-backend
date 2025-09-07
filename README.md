# Auth Backend 🚀

A backend authentication and authorization system built with **Node.js**, **Express**, and **MongoDB**.  
It provides secure user registration, login, JWT-based authentication, password reset, and email verification workflows.

---

## ✨ Features

- User Registration & Login  
- JWT Authentication (Access & Refresh Tokens)  
- Password Reset via Email (Mailgen + Nodemailer + Mailtrap)  
- Change Password for Logged-in Users  
- Input Validation with **express-validator**  
- Centralized Error Handling  
- MongoDB with Mongoose ODM  

---

## ⚙️ Tech Stack

- **Node.js** + **Express.js**  
- **MongoDB** + **Mongoose**  
- **JWT** for authentication  
- **Bcrypt** for password hashing  
- **Nodemailer + Mailgen** for email templates  
- **express-validator** for validation  

---

## 📁 Project Structure

```
src/
├── controllers/     # Route controllers (auth, user, etc.)
├── middlewares/     # Custom middlewares (auth, validation)
├── models/          # Mongoose models (User)
├── routes/          # Express routes
├── utils/           # Helpers (ApiError, ApiResponse, sendEmail, etc.)
└── server.js        # Entry point
```

---

## 🚀 Getting Started

### 1️⃣ Setup Environment Variables

Create a `.env` file in the root of your project:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

# JWT
ACCESS_TOKEN_SECRET=your_access_secret_key
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_secret_key
REFRESH_TOKEN_EXPIRY=7d

# Email
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=your_mailtrap_username
SMTP_PASS=your_mailtrap_password
FORGOT_PASSWORD_REDIRECT_URL=http://localhost:3000/forgot-password
```

### 2️⃣ Run the server

```bash
npm run dev
```
