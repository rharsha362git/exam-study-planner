import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Exam Study Planner</h1>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#add-subject">Add Subject</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;