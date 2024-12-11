import React, { useState, useEffect } from 'react';
import '../../styles/header.css'
import "../../styles/products.css"
import '../../styles/header.css';
import "../../styles/products.css";

import Header from '../../components/header';
import Footer from '../../components/footer';
import LifeNav from './life-nav-home-page.jsx';
import Modal from '../../components/products-alert.jsx'; 

function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 15000); // Closes modal after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          message={<>
            These tools are only placeholders which will be released every 15 days for the next 6 months starting from 16th Jan 2025.
            <br />
            Stay tuned for updates.
            <br/>
            </>}
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      <div className="header-home-page">
        <Header />
      </div>

      <div className="main-home-page">
        <LifeNav />
      </div>

      <div className="footer-home-page">
        <Footer />
      </div>
    </>
  );
}

export default ProductsPage;
