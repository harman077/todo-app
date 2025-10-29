import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About This To-Do App</h2>

      <div className="card shadow p-4 border-0">
        <p>
          This <strong>To-Do App</strong> is a simple yet fully functional task management
          project built using <strong>React</strong> and <strong>Bootstrap</strong>.  
          It demonstrates essential frontend development skills including state management, CRUD operations, 
          and UI design.
        </p>

        <h5 className="mt-4 mb-2 text-primary">✨ Features Included:</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            ➕ <strong>Add Tasks</strong> – Users can add new tasks using an input field.
          </li>
          <li className="list-group-item">
            📝 <strong>Edit Tasks</strong> – Existing tasks can be edited inline.
          </li>
          <li className="list-group-item">
            ❌ <strong>Delete Tasks</strong> – Tasks can be deleted permanently.
          </li>
          <li className="list-group-item">
            ✅ <strong>Mark as Completed / Uncompleted</strong> – Tasks can be toggled between done and pending states.
          </li>
          <li className="list-group-item">
            💾 <strong>Local Storage</strong> – All tasks are stored in the browser so data persists even after refreshing.
          </li>
          <li className="list-group-item">
            🎨 <strong>Bootstrap Styling</strong> – For a clean, responsive, and modern UI.
          </li>
        </ul>

        <h5 className="mt-4 mb-2 text-primary">🧠 What This Project Demonstrates:</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            • Understanding of <strong>React Hooks</strong> – useState and useEffect.
          </li>
          <li className="list-group-item">
            • Implementing <strong>CRUD operations</strong> in a single-page React app.
          </li>
          <li className="list-group-item">
            • Managing and persisting data using <strong>localStorage</strong>.
          </li>
          <li className="list-group-item">
            • Using <strong>Bootstrap</strong> for responsive and styled components.
          </li>
        </ul>

        <div className="mt-4 text-center">
          <p className="mb-1">📍 Project built as part of a <strong>Frontend Developer Portfolio</strong>.</p>
          <p className="text-muted">Built with ❤️ using React & Bootstrap.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
