import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const TodoApp = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    if (tasks !== null) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  if (tasks === null) return null;

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    const newTask = prompt("Edit your task", tasks[index].text);
    if (newTask && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newTask;
      setTasks(updatedTasks);
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your To-Do List</h2>

      {tasks.length === 0 ? (
        <p className="text-muted text-center">No tasks added yet!</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "list-group-item-success" : ""
              }`}
            >
              <div className="form-check">
                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(index)}
                  id={`task-${index}`}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor={`task-${index}`}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </label>
              </div>

              <div>
                <button
                  className="btn btn-sm btn-outline-success me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

<div className="text-center mt-4">
    <Link to='/'> 
    <button className="btn btn-dark px-4">Back</button>
    </Link>

</div>
    </div>
  );
};

export default TodoApp;
