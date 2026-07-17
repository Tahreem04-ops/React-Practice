# 📘 React + Supabase Users Table

A simple React application that connects to **Supabase** and fetches data from the **users** table. The fetched data is displayed in a responsive frontend table using React hooks.

---

## 🚀 Features

- Connect React with Supabase
- Fetch data from the `users` table
- Display users in a dynamic table
- Responsive and clean UI
- Uses React Hooks (`useState`, `useEffect`)
- Real-time database integration with Supabase

---

## 🛠️ Technologies Used

- React.js
- Vite
- Supabase
- JavaScript (ES6)
- CSS3

---

## 📂 Project Structure

```text
react-supabase-users/
│
├── src/
│   ├── components/
│   │   └── UserTable.jsx
│   │
│   ├── lib/
│   │   └── supabase.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/react-supabase-users.git
```

### Navigate to the project

```bash
cd react-supabase-users
```

### Install dependencies

```bash
npm install
```

### Install Supabase

```bash
npm install @supabase/supabase-js
```

### Start the development server

```bash
npm run dev
```

---

## 🔑 Configure Supabase

Create a file named **supabase.js** inside the `src/lib` folder.

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_SUPABASE_PROJECT_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
```

Replace the URL and API key with your own Supabase project credentials.

---

## 🗄️ Database

Create a table named **users** with the following columns:

- id
- name
- email
- age

Insert sample records into the table to display on the frontend.

---

## 📚 Learning Outcomes

- Connect a React application with Supabase.
- Fetch data using the Supabase JavaScript client.
- Use `useState` and `useEffect` for data fetching.
- Display dynamic data in a table.
- Understand frontend and backend integration.

---

## 📖 References

- **Supabase React Tutorial** – Fireship
- **Supabase with React in Hindi** – Thapa Technical

---

## 👩‍💻 Author

**Tahreem Asif**  
BS Computer Science Student  
COMSATS University Islamabad, Vehari Campus