import React, { useState, useEffect } from 'react'
import { NavHashLink as Link}  from "react-router-hash-link";
import './navbar.scss';
import logo from '../../assets/images/nk-logo_bright.png';
import x from '../../assets/icons/x-mark-thin-light.svg'
//import cross from '../../assets/icons/cross.svg';

export function NavLinks() {
    return (
        <>
            <li>
                <Link to="/#top" activeClassName="active-nav-link">Home</Link>
            </li>
            <li>
                <Link to="/#work" activeClassName="active-nav-link">My work</Link>
            </li>
            <li>
                <Link to="/#contact" activeClassName="active-nav-link">Hire me</Link>
            </li>
            <li>
                <Link to="/#about-me" activeClassName="active-nav-link">Über mich</Link>
            </li>
        </>
    )
}

export default function Nav() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            const nav = document.getElementById("nav");
            if (nav)
                nav.classList.toggle("scrolled", window.scrollY > 100);
        });
    });

    return (
        <>
            <div className="nav-mobile" id="nav">
                <div className="nav-icons">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link><i className="fas fa-bars burger" onClick={() => handleToggle()}></i>
                </div>
                <nav className={`mobile ${isActive ? "active" : ""}`}>
                <img src={x} alt="x" id="close-nav" className="close-btn" onClick={() => handleToggle()} />
                    <ul>
                        <NavLinks />
                    </ul>
                </nav>
            </div>
        </>
    );
}
