import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import TaskList from "./components/taskList/task-list";
import "./styles.css";

let idAcc = "";
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const onDeleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((tasks) => tasks.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <TaskList
          title="Em andamento"
          onAddTask={addTask}
          taskState="Em andamento"
          tasks={tasks.filter((t) => t.state === "Em andamento")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <TaskList
          title="Concluída"
          onAddTask={addTask}
          taskState="Concluída"
          tasks={tasks.filter((t) => t.state === "Concluída")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}
