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
            <li><Link to="/VDreams-ProdBuild/">Home</Link></li>
            <li><Link to="/VDreams-ProdBuild/our-story/">Our Story</Link></li>
            <li><Link to="/VDreams-ProdBuild/products/">Products</Link></li>
            <li><Link to="/VDreams-ProdBuild/updates-reports/">Updates & Reports</Link></li>
            <li><Link to="/VDreams-ProdBuild/contact-us/">Contact Us</Link></li>
          </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;
