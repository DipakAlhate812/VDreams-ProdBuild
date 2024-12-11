import React from 'react';
import '../../styles/life-nav-styles/app-details-card.css';

function AppDetailsCard({ title, description }) {
    
    const handleClick = () => {
        console.log("Button Clicked")
        };
    
    return ( 
    <>
    <div className="card">
        {/* <Link  className='button-card' onClick={handleClick}> */}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">
                {description}
                </p>
            </div>
        {/* </Link> */}

    </div>
    
    </>
    
    )
}

export default AppDetailsCard;