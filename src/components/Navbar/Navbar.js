import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './navbar.scss';
import logo from '../../assets/images/nk-logo_bright.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav-desktop">
                    <nav>
                        <div className="nav-icons">
                            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link><i className="fas fa-bars burger"></i>
                        </div>
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
                <div className="nav-mobile">
                    <div className="nav-icons">
                        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link><i className="fas fa-bars burger"></i>
                    </div>
                    <nav className="mobile">
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
}
