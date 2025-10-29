import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5 py-3">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} <strong>My To-Do App</strong>. All rights reserved.
        </p>
        <div>
          <a
            href="https://github.com/harman077"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-2"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/harman-dhaliwal-8a516024a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-2"
          >
            LinkedIn
          </a>
          |
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhaliwalharman397@gmail.com"
            className="text-white text-decoration-none mx-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
