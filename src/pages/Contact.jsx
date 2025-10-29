import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="card shadow p-4 border-0">
        <p className="text-center">
          I’d love to connect with you! 😊  
          If you’re looking for a{" "}
          <strong>Frontend Developer (React)</strong> who’s passionate about
          building clean, responsive, and user-friendly web applications —
          feel free to reach out.
        </p>

        <h5 className="mt-4 mb-3 text-primary text-center">📬 Get in Touch</h5>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {/* GitHub */}
          <a
            href="https://github.com/harman077"
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github me-2"></i> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/harman-dhaliwal-8a516024a/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin me-2"></i> LinkedIn
          </a>

          {/* Gmail compose link */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhaliwalharman397@gmail.com"
            className="btn btn-outline-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-envelope me-2"></i> Email Me
          </a>

          {/* Mobile number */}
          <a href="tel:+919888369563" className="btn btn-outline-success">
            <i className="bi bi-telephone me-2"></i> Call Me
          </a>
        </div>

        <div className="mt-4 text-center text-muted">
          <p>
            📍 Based in <strong>India</strong> | Available for{" "}
            <strong>Internships</strong> and{" "}
            <strong>Entry-Level Frontend Developer roles</strong>.
          </p>
          <p>
            Or reach me directly at:{" "}
            <a href="tel:+919876543210" className="text-decoration-none">
              +91 98883 69563
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
