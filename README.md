# 📚 Library Management REST API with JWT Authentification

The Restful API i developed for LbraryManagement is further developed with JWT 
---

## 🚀 Features

- ✅ User Registration & Login with hashed passwords
- 🔐 JWT Authentication for protected routes
- 📖 Book management (CRUD)
- 👤 Student management
- 🔄 Borrow & Return system
- ⚙️ Modular codebase (Routes, Services, Models)


---

## 🔑 Authentication

### Register
**POST** `/api/users/register`

**Body:**
```json
{
  "username": "Shalini",
  "email": "2021ict758@stu.vau.ac.lk",
  "password": "abcd123"
}
```

![Screenshot 2025-06-12 163021](https://github.com/user-attachments/assets/aef29bd0-0105-4184-af1e-479da1dc2d1b)


### Login
**POST** `/api/users/login`

**Body:**
```json

{
  "email": "2021ict758@stu.vau.ac.lk",
  "password": "abcd123"
}
```

![Screenshot 2025-06-12 163037](https://github.com/user-attachments/assets/34916a9a-9b38-4561-a440-42611ccbb34e)
