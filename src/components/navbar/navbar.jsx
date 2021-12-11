import React, { useState } from 'react';
import "./navbar.css";
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'

const Navbar = () => {

    const [openBurger, setOpenBurger] = useState(false);
    const togglehamburger = () => {
        setOpenBurger(!openBurger)
    }

    return (
        <div className="space__navbar">
                <div className="space__navbar_logo">
                    <img src={logo} alt="logo" />
                </div>
                <span className="space__navbar_line"></span>       
                <div className="space__navbar_container">
                    <p><a href="#home"><span>00</span>HOME</a></p>
                    <p><a href="#destination"><span>01</span>DESTINATION</a></p>
                    <p><a href="#crew"><span>02</span>CREW</a></p>
                    <p><a href="#technology"><span>03</span>TECHNOLOGY</a></p>
                </div>
                <button onClick={togglehamburger} style={{backgroundImage: "url(" +(openBurger? close: hamburger) + ")"}} />
                {openBurger && 
                <div className="space__navbar_container-mobile" style={{animation: (openBurger && "slide_in 350ms forwards")}}>
                    <p><a href="#home"><span>00</span>HOME</a></p>
                    <p><a href="#destination"><span>01</span>DESTINATION</a></p>
                    <p><a href="#crew"><span>02</span>CREW</a></p>
                    <p><a href="#technology"><span>03</span>TECHNOLOGY</a></p>
                </div>}
        </div>
    )
}

export default Navbar
