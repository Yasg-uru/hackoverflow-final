import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink ko import karna hai
import './Navbar.css';
import { useSelector } from 'react-redux';
function Navbar() {
  const isloggedin=useSelector((state)=>state.auth.isLoggedIn);
  const {role}=useSelector((state)=>state.auth.userdata)
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBkBD2tgVi9mtkt0st26dkEh0wnqQVcaktHj-uJRsfQ&s" alt="Logo" />
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/"  >Home</NavLink></li>
        <li><NavLink to="/about" >Helpline</NavLink></li>
        <li><NavLink to="/services">News </NavLink></li>
        <li><NavLink to="/contact" >Maps </NavLink></li>
        <li><NavLink to="/login" >Login </NavLink></li>
        {/* <li><NavLink to="/application" >Apply to become  </NavLink></li> */}
       {
        role==="admin"?<li>
          <NavLink to="/admin-panel" >
            Admin panel
          </NavLink>
        </li>:""
       }
      </ul>
    </nav>
  );
}

export default Navbar;
