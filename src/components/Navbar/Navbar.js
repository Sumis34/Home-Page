import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './navbar.scss';
import logo from '../../assets/images/nk-logo_bright.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                        </li>
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
        );
    }
}
