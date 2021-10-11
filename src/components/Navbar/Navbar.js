import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './navbar.scss';
import logo from '../../assets/images/nk-logo_bright.png';

export function NavLinks() {
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">My work</Link>
            </li>
            <li>
                <Link to="/users">Hire me</Link>
            </li>
        </>
    )
}

export default function Nav() {
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            const nav = document.getElementById("nav");
            nav.classList.toggle("scrolled", window.scrollY > 0);
        });
    });

    return (
        <>
            <div className="nav-mobile" id="nav">
                <div className="nav-icons">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link><i className="fas fa-bars burger" onClick={() => handleToggle()}></i>
                </div>
                <nav className={`mobile ${isActive ? "active" : ""}`}>
                    <i className="fas fa-times close" onClick={() => handleToggle()}></i>
                    <ul>
                        <NavLinks />
                    </ul>
                </nav>
            </div>
        </>
    );
}
