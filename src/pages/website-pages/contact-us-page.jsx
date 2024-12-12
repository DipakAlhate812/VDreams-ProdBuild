import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import SocialMediaLinks from '../../components/SocialMediaLinks';
// import ContactUs from '../../components/contact-us';

import '../../styles/contact-us-page.css'

function ContactUsPage() {
  return (
    <>
        <div className="header-contact-page">
            <Header></Header>
        </div>
        
        <div className="main-contact-page">
            {/* <ContactUs></ContactUs> */}
            <h2>Contribute to new journey!</h2>
            <a href="https://forms.gle/KmDozTLwPvQT8w8p7" target="_blank" rel="noopener noreferrer">
              <button>Subscribe for updates</button>
            </a>
            <a href="https://forms.gle/wMskQoXJh5aruRNXA" target="_blank" rel="noopener noreferrer">
              <button>Un-Subscribe for updates</button>
            </a>
            <a href="https://forms.gle/fAJRdDMjTYA2riWK7" target="_blank" rel="noopener noreferrer">
              <button>Contribute in User Survey Form</button>
            </a>
            <SocialMediaLinks></SocialMediaLinks>
        </div>
        <div className="footer-home-page">
            <Footer></Footer>
        </div>
    </>
  );
}


export default ContactUsPage;
