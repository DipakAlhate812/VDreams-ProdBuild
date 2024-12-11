import React from 'react';
import '../styles/header.css'

function Header() {
  return (
    <>
        <header className="header">
            {/* <img src="../src/assets/Web Poster.png" alt="Website Logo" /> */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/updates-reports">Updates & Reports</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;
