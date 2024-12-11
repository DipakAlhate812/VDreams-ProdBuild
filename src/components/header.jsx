import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
        <header className="header">
            {/* <img src="../src/assets/Web Poster.png" alt="Website Logo" /> */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/updates-reports">Updates & Reports</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;
