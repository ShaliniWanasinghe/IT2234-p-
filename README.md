# 📚 Library Management API - IT2234 ICAE 03

This project is a RESTful API developed for a **Library Management System**, as part of the **ICAE 03 practical assessment** of the IT2234 module: *Web Service and Server Technologies*.

> ✅ Implemented using Node.js, Express, MongoDB, Mongoose, and tested with Postman  
> 🛠 Designed and tested according to real-world academic use-case scenarios

---

## 🧾 Tasks Implemented

According to the ICAE 03 instructions, the API includes functionality for:

1. 📂 **Mapping models and displaying data**:
   - Student, Book, and Borrow collections.
   - View collections in MongoDB Compass.

2. 🔍 **Filtering**:
   - Filter books by genre.
   - Filter students by year.

3. ♻️ **Common Functionality**:
   - A shared function used for both filters.

4. 📚 **Borrowing Process with Validations**:
   - Validate student and book existence.
   - Ensure the student has ≤ 2 unreturned books.
   - Ensure 1 non-lending copy remains.
   - Decrease available copy count when borrowed.
   - Return appropriate error messages.

---
## ⚙️ Technologies Used

| Tool             | Usage                                |
|------------------|---------------------------------------|
| Node.js          | JavaScript runtime                   |
| Express.js       | RESTful API framework                |
| MongoDB & Compass| Database & GUI                        |
| Mongoose         | ODM for MongoDB                      |
| Postman          | API testing tool                     |
| VS Code          | Development IDE                      |

---

## 🧪 API Endpoints Overview

| Method | Route               | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | `/students`         | List all students                    |
| GET    | `/books`            | List all books                       |
| POST   | `/borrow`           | Borrow a book with validation        |
| GET    | `/books/genre/:g`   | Filter books by genre                |
| GET    | `/students/year/:y` | Filter students by year              |

---

## 📸 Screenshots

### ✅ VS Code Project Setup

![1 0](https://github.com/user-attachments/assets/5e3632f6-19e0-478b-8689-53d4af8bc7be)

### 📡 Postman API Testing
![1 2 postman](https://github.com/user-attachments/assets/dc598992-3c2f-4417-946e-5471b3747ca0)

![all students postman](https://github.com/user-attachments/assets/c0930c87-bb23-4eb3-879b-d15d1641c2bc)

## Filtering via Postman

![filtering book genre postman](https://github.com/user-attachments/assets/85ab65a4-4ab5-4b81-9580-e987c1f4e23b)

![filtering by year in postman](https://github.com/user-attachments/assets/736d437d-5a30-4e7d-9da1-6a8617d7794c)


### 🗃️ MongoDB Compass Collections
![1 2](https://github.com/user-attachments/assets/f9c8db90-d038-40f6-950e-a81f83003658)

![1 3](https://github.com/user-attachments/assets/96d6f228-d9ba-4ac7-a887-a52e27ed52dd)

![1 4](https://github.com/user-attachments/assets/bc7daf56-c857-4754-b0f2-844eb13fd563)

## Filtering Responses via MongoDB
![filter year](https://github.com/user-attachments/assets/9499d916-c1ff-4638-858f-33765594b7ea)

![filtering book postman](https://github.com/user-attachments/assets/90217a13-58af-4a8d-8f67-9d576a05b957)

---





![filtering student by ID postman](https://github.com/user-attachments/assets/18300c9f-6779-411b-89e9-201c4198d4c8)
![filtering](https://github.com/user-attachments/assets/d80445cf-6ad6-4983-a9b1-57b868971929)
