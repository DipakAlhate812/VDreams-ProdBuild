import React from 'react';
import '../../styles/life-nav-styles/life-nav-home-page.css';
import AppNameHeader from '../../components/Life-Nav/app-name-header';
import AppDetailCardSection from '../../components/Life-Nav/app-detail-card-section';

function LifeNav() {
    return ( <>

    <div className='home-page'>
        <AppNameHeader>VDreams LifeNav</AppNameHeader>
        <p style={{
            color: "red", 
            fontSize: "0.9rem", 
            fontWeight: "bold", 
            textAlign: "center", 
            margin: "0px 0", 
            lineHeight: "1.5",
            
        }}>These tools are only placeholder which will be released every 15 days for next 6 months.</p>
        <AppDetailCardSection></AppDetailCardSection>
    </div>

        
    </> );
}

export default LifeNav;