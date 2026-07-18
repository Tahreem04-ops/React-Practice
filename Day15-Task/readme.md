# Day 15 - Express Supabase Service Role

## 📖 Overview

This project demonstrates how to use the **Supabase Service Role Key** in an **Express.js** backend to retrieve all authenticated users. The Service Role Key provides admin-level access and should only be used on the server.

---

## 🚀 Features

- Express.js server
- Supabase Service Role integration
- Environment variables with dotenv
- Admin route to fetch all users
- JSON response
- Error handling

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Supabase
- dotenv
- JavaScript (ES Modules)

---

## 📁 Project Structure

```
Day15-Service-Role/
│
├── routes/
│   └── admin.js
├── .env
├── server.js
├── supabase.js
├── package.json
└── README.md
```

---

## 📦 Installation

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file and add the following:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
PORT=3000
```

> **Note:** Never expose the Service Role Key in frontend applications.

---

## ▶️ Run the Project

```bash
node server.js
```

or

```bash
npm start
```

---

## 📡 API Endpoint

### Get All Users

**GET**

```
/admin/users
```

### Sample Response

```json
{
  "success": true,
  "users": [
    {
      "id": "xxxxxxxx",
      "email": "user@example.com"
    }
  ]
}
```

If no users exist in Supabase Authentication:

```json
{
  "success": true,
  "users": []
}
```

---

## 📚 Learning Outcomes

- Understand the purpose of the Supabase Service Role Key.
- Create secure admin routes in Express.
- Fetch authenticated users using `supabase.auth.admin.listUsers()`.
- Store sensitive credentials using environment variables.
- Build a secure backend API.

---

## 🔒 Important

- Use the **Service Role Key** only on the backend.
- Never expose it in React, Vite, or any frontend application.
- Keep your `.env` file private and never upload it to GitHub.

---

## 👩‍💻 Author

**Tahreem Asif**