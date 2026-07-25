# Day 28 – Capstone Database Design (Supabase Kanban Schema)

## 📌 Overview

This project is the Day 28 capstone task focused on designing a relational database schema for a Kanban Board application using Supabase. The database is structured to support boards, lists, tasks, and users while maintaining proper relationships between tables.

The schema is designed for a React Drag-and-Drop Kanban application similar to Trello.

---

## 🚀 Features

- User management
- Multiple boards per user
- Multiple lists within each board
- Multiple tasks within each list
- UUID primary keys
- Foreign key relationships
- Cascading deletes
- Task ordering using the `position` field
- Timestamp tracking

---

## 🗄️ Database Schema

### Users
Stores application users.

| Column | Type |
|---------|------|
| id | UUID (Primary Key) |
| name | Text |
| email | Text |
| created_at | Timestamp |

---

### Boards
Stores boards created by users.

| Column | Type |
|---------|------|
| id | UUID (Primary Key) |
| user_id | UUID (Foreign Key) |
| title | Text |
| created_at | Timestamp |

---

### Lists
Stores lists inside each board.

| Column | Type |
|---------|------|
| id | UUID (Primary Key) |
| board_id | UUID (Foreign Key) |
| title | Text |
| position | Integer |

---

### Tasks
Stores tasks within lists.

| Column | Type |
|---------|------|
| id | UUID (Primary Key) |
| list_id | UUID (Foreign Key) |
| title | Text |
| description | Text |
| due_date | Date |
| position | Integer |
| completed | Boolean |
| created_at | Timestamp |

---

## 🔗 Relationships

```
Users
  │
  └── Boards
         │
         └── Lists
                 │
                 └── Tasks
```

- One User can have multiple Boards.
- One Board can contain multiple Lists.
- One List can contain multiple Tasks.

---

## 🛠️ Technologies Used

- Supabase

---

## 📂 Project Structure

```
Database
│
├── users
├── boards
├── lists
└── tasks
```

---

## 📖 Learning Outcomes

Through this project, I learned:

- Designing a relational database
- Creating normalized database tables
- Defining primary and foreign keys
- Managing one-to-many relationships
- Using UUIDs for unique identifiers
- Applying cascading delete rules
- Organizing data for a Kanban application
  

---

## 📸 Database Schema Preview

The schema contains the following relationships:

```
Users
   │
Boards
   │
Lists
   │
Tasks
```

---

## ✅ Project Status

✔ Database schema designed

✔ Tables created successfully

✔ Relationships established

✔ Ready for React Kanban frontend integration

---

## 👩‍💻 Author

**Tahreem Asif**

BS Computer Science Student

COMSATS University Islamabad

GitHub: https://github.com/Tahreem04-ops
