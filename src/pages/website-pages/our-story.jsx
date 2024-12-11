import React from 'react';
import '../../styles/our-story.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import FounderMessage from '../../components/FounderMessage';

function OurStoryPage() {
  return (
    <>
        <div className="header-story-page">
            <Header></Header>
        </div>
        
        <div className="main-story-page">
            <FounderMessage></FounderMessage>
        </div>

        <div className="footer-home-page">
            <Footer></Footer>
        </div>

    </>
  );
}


export default OurStoryPage;
