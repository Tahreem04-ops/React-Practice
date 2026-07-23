# ⚡ React Performance Optimization

A React project demonstrating performance optimization using **useMemo**, **useCallback**, and **React.memo**. The application displays 1000+ products, provides real-time search functionality, and minimizes unnecessary re-renders for better performance.

---

## 🚀 Features

- 🔍 Search through 1000+ products
- ⚡ Optimized filtering with `useMemo`
- 🎯 Optimized event handlers with `useCallback`
- 🔄 Prevent unnecessary re-renders using `React.memo`
- 📱 Responsive and modern UI
- 📜 Scrollable product list
- 🎨 Gradient background with interactive cards

---

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS3

---

## 📂 Project Structure

```text
Day22-Task/
│── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── Item.jsx
│   │   └── ItemList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/Day22-Task.git
```

2. Navigate to the project folder

```bash
cd Day22-Task
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

---

## 📖 How It Works

1. The application generates a list of **1000 products**.
2. Users can search for products using the search box.
3. `useMemo` caches the filtered product list to avoid unnecessary filtering on every render.
4. `useCallback` memoizes the click handler to prevent recreating the function on every render.
5. `React.memo` prevents item components from re-rendering unless their props change.

---

## 📸 Output

- Displays 1000+ products.
- Search updates the list instantly.
- Clicking the **View** button displays the selected product.
- Smooth scrolling and responsive layout.


<img width="1346" height="642" alt="image" src="https://github.com/user-attachments/assets/bf647845-5df3-4403-8262-532b98c7c109" />

<img width="1344" height="608" alt="image" src="https://github.com/user-attachments/assets/7ba012bf-ff60-4a34-8a8e-7ad7ee02137a" />

---

## 🎯 Learning Outcomes

By completing this project, you will learn:

- State management with `useState`
- Performance optimization using `useMemo`
- Function memoization with `useCallback`
- Component memoization using `React.memo`
- Rendering large lists efficiently in React

---

## 👨‍💻 Author

**Tahreem Asif**

GitHub: https://github.com/Tahreem04-ops

LinkedIn: https://www.linkedin.com/in/tahreem-asif-131a3141b
