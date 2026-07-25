# Kanban Board - React + Express + Supabase

A full-stack Kanban Board application built with **React**, **Express.js**, and **Supabase**. The project allows users to manage tasks across different columns (Todo, In Progress, Done) using a modern drag-and-drop interface.

---

## 🚀 Features

- Three-column Kanban Board
- Drag & Drop task movement
- React frontend
- Express REST API
- Supabase PostgreSQL Database
- Axios for API communication
- Real-time task updates
- Responsive UI
- CRUD operations for tasks

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- @hello-pangea/dnd
- CSS

### Backend
- Node.js
- Express.js
- CORS
- Dotenv

### Database
- Supabase
- PostgreSQL

---

## 📁 Project Structure

```
Day29-Task/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Board.jsx
│   │   │   ├── Column.jsx
│   │   │   └── Task.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── supabase.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/kanban-board.git
```

---

### Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
PORT=5000
```

Run backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 📡 API Endpoints

### Get All Tasks

```
GET /api/tasks
```

### Create Task

```
POST /api/tasks
```

### Update Task

```
PUT /api/tasks/:id
```

### Delete Task

```
DELETE /api/tasks/:id
```

---

## 🗄️ Database Schema

### Users

- id
- name
- email

### Boards

- id
- user_id
- title

### Lists

- id
- board_id
- title
- position

### Tasks

- id
- list_id
- title
- description
- due_date
- position
- completed
- created_at

---

## 🎯 Workflow

1. Fetch tasks from Supabase.
2. Display tasks in Todo, In Progress, and Done columns.
3. Drag and drop tasks between columns.
4. Update task status through the Express API.
5. Save changes in Supabase.

---

## 📸 Application Preview

```
Kanban Board

-------------------------------
| Todo | In Progress | Done |
-------------------------------
| Task | Task | Task |
| Task |      |      |
-------------------------------
```

<img width="1318" height="683" alt="image" src="https://github.com/user-attachments/assets/dae9b994-acf9-4332-86af-95b900c222a1" />
<img width="1317" height="689" alt="image" src="https://github.com/user-attachments/assets/25a7fb87-4579-4d7d-9af3-a4df3ca4199c" />



---

## 📚 Learning Outcomes

- React component architecture
- REST API development
- Express routing
- Supabase integration
- CRUD operations
- Drag & Drop implementation
- Database design
- API communication with Axios
- Full-stack application development

---

## 👩‍💻 Author

**Tahreem Asif**

BS Computer Science

COMSATS University Islamabad

---

## 📄 License

This project is developed for educational and learning purposes.
