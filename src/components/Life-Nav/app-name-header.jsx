import React from 'react';
import '../../styles/life-nav-styles/app-name-header.css';
import logo from '../../assets/logo.png'; // Make sure to place your logo image in the appropriate folder

function AppNameHeader() {
    return ( 
        <header className="app-header">
            <img src={logo} alt="Life Navigator" className="logo" />
            <span className="app-title">LifeNav Tools</span>
            <img src={logo} alt="Life Navigator" className="logo" />
        </header>
    );
}

export default AppNameHeader;
