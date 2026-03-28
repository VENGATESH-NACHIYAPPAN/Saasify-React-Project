import React, { useState } from "react";
import './Header.css';
import logo from '../../Assets/logo.jpeg';
import { Link } from "react-router-dom";

function Menubar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logopart">
        <div className="log">
          <img src={logo} alt="Saasify logo" />
        </div>

        {/* ✅ Company name added here */}
        <span className="company-name">Saasify</span>

        <div className="toggle" onClick={() => setOpen(!open)}>
          <i className={`bi ${open ? 'bi-x' : 'bi-list'}`}></i>
        </div>
      </div>

      <div className={`menus ${open ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Feature">Features</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>

      <div className={`rightmenu ${open ? 'open' : ''}`}>
        <ul>
          <li><i className="bi bi-moon-fill"></i></li>
          <li><button className="mybtn">Get Started</button></li>
        </ul>
      </div>
    </header>
  );
}

export default Menubar;