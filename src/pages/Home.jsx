import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [taskInput, setTaskInput] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      setMessage("Please enter a task!");
      return;
    }

    // Save to localStorage
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
localStorage.setItem(
  "tasks",
  JSON.stringify([...existingTasks, { text: taskInput, completed: false }])
);


    // Show success message
    setMessage("Task added successfully ✅");
    setTaskInput("");

    // Clear message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Add Your Task</h1>

      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {message && (
        <div className="alert alert-success w-50 mx-auto" role="alert">
          {message}
        </div>
      )}

      <button
        className="btn btn-outline-primary mt-3"
        onClick={() => navigate("/todo")}
      >
        View To-Do List
      </button>
    </div>
  );
};

export default Home;
