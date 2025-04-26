// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🖋️ DailyInk</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#journal">Journal</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
