// 1. Header Component (Profile Picture and Contact Info)
import React from "react";

const Header = () => {
  return (
    <div className="bg-dark text-white text-center py-4">
      <h1 className="text-warning">
        <i className="bi bi-person-circle"></i> Eman Chaudhary
      </h1>
      <img
        src="/ProffPic.jpg"
        alt="Profile Picture"
        className="img-thumbnail rounded-circle mb-3"
        style={{ width: "120px", height: "120px" }}
      />
      <p><i className="bi bi-envelope"></i> eman.abc05@gmail.com</p>
      <p><i className="bi bi-telephone"></i> 03354468887</p>
      <div>
        <a href="https://github.com/" className="btn btn-outline-light btn-sm m-2">
          <i className="bi bi-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/" className="btn btn-outline-light btn-sm m-2">
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Header;