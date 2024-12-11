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
            <li><a href="/VDreams-ProdBuild/">Home</a></li>
            <li><a href="/VDreams-ProdBuild/our-story">Our Story</a></li>
            <li><a href="/VDreams-ProdBuild/products">Products</a></li>
            <li><a href="/VDreams-ProdBuild/updates-reports">Updates & Reports</a></li>
            <li><a href="/VDreams-ProdBuild/contact-us">Contact Us</a></li>
          </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;
