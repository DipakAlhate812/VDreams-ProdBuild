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
            <a><button>Feedback Form</button></a>
            <a><button>Get Notifications for updates</button></a>
            <SocialMediaLinks></SocialMediaLinks>
        </div>
        <div className="footer-home-page">
            <Footer></Footer>
        </div>
    </>
  );
}


export default ContactUsPage;
