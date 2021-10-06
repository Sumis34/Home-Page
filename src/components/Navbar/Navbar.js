import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './navbar.scss';
import logo from '../../assets/images/nk-logo_bright.png';


export default function Nav() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <div className="nav-mobile">
                <div className="nav-icons">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link><i className="fas fa-bars burger" onClick={() => handleToggle()}></i>
                </div>
                <nav className={`mobile ${isActive ? "active" : ""}`}>
                    <i className="fas fa-times close" onClick={() => handleToggle()}></i>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
