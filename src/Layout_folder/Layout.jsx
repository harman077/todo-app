import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header always at top */}
      <Header />

      {/* Main content grows to fill available space */}
      <main className="container flex-grow-1 mt-4 mb-4">
        <Outlet />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
