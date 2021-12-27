import React, { useState, useEffect } from 'react';
import "./navbar.css";
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    let location = useLocation();
    
    const [currentPath, setCurrentPath] = useState(location.pathname)
    const [openBurger, setOpenBurger] = useState(false);
    const togglehamburger = () => {
        setOpenBurger(!openBurger)
    }
    useEffect(()=>{
        setCurrentPath(location.pathname)
    }, [location])


    return (
        <div className="space__navbar">
                <div className="space__navbar_logo">
                    <img src={logo} alt="logo" />
                </div>
                <span className="space__navbar_line"></span>       
                <div className="space__navbar_container">
                    <Link to='/'><p style={currentPath === '/'? {borderBottom: '2px solid white'}: {}}><span>00</span>HOME</p></Link>
                    <Link to='/destination'><p style={currentPath === '/destination'? {borderBottom: '2px solid white'}: {}}><span>01</span>DESTINATION</p></Link>
                    <Link to='/crew'><p style={currentPath === '/crew'? {borderBottom: '2px solid white'}: {}}><span>02</span>CREW</p></Link>
                    <Link to='/technology'><p style={currentPath === '/technology'? {borderBottom: '2px solid white'}: {}}><span>03</span>TECHNOLOGY</p></Link>
                </div>
                <button onClick={togglehamburger} style={{backgroundImage: "url(" +(openBurger? close: hamburger) + ")"}} />
                {openBurger && 
                <div className="space__navbar_container-mobile" style={{animation: (openBurger && "slide_in 350ms forwards")}}>
                    <Link to='/'><p style={currentPath === '/'? {borderBottom: '2px solid white'}: {}}><span>00</span>HOME</p></Link>
                    <Link to='/destination'><p style={currentPath === '/destination'? {borderBottom: '2px solid white'}: {}}><span>01</span>DESTINATION</p></Link>
                    <Link to='/crew'><p style={currentPath === '/crew'? {borderBottom: '2px solid white'}: {}}><span>02</span>CREW</p></Link>
                    <Link to='/technology'><p style={currentPath === '/technology'? {borderBottom: '2px solid white'}: {}}><span>03</span>TECHNOLOGY</p></Link>
                </div>}
        </div>
    )
}

export default Navbar
