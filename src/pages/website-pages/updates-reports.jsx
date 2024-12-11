import React from 'react';
import '../../styles/header.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import UpdateCard from '../../components/updates';
import TimelineCards from '../../components/TimelineCards';
import '../../styles/timelinecards.css'
function UpdatesReportsPage() {
  return (
    <>
        <div className="header-home-page">
            <Header></Header>
        </div>
        
        <div className="main-home-page">
            <UpdateCard> </UpdateCard>
        </div>

        <div className="footer-home-page">
            <Footer></Footer>
        </div>
    </>
  );
}


export default UpdatesReportsPage;
