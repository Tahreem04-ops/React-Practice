import { useEffect, useState } from "react";
import api from "./services/api";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1>📋 Kanban Board</h1>
      <p className="subtitle">
        Organize your work with Drag & Drop
      </p>

      <Board tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;