import React from 'react';
import "./navbar.css";
import logo from '../../assets/shared/logo.svg';

const navbar = () => {
    return (
        <div className="space__navbar">
                <div className="space__navbar_logo">
                    <img src={logo} alt="logo" />
                </div>
                <span className="space__navbar_line"></span>
                <div className="space__navbar_container">
                    <p><a href="#home"><span>00</span> HOME</a></p>
                    <p><a href="#destination"><span>01</span> DESTINATION</a></p>
                    <p><a href="#crew"><span>02</span> CREW</a></p>
                    <p><a href="#technology"><span>03</span> TECHNOLOGY</a></p>
                </div> 
        </div>
    )
}

export default navbar
