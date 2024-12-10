// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
        <h1>Address App</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Address</Link>
        <Link to="/manage">Manage Addresses</Link>
      </nav>
    </header>
  );
};

export default Header;
