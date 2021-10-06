import React from 'react'
import './footer.scss';
import {NavLinks} from '../Navbar/Navbar'

export default function Footer() {
    return (
        <footer>
            <div className="top-footer">
                <div className="company">
                    <h1>Noé Krebs</h1>
                    <p>I build your experiance</p>
                </div>
                <div className="explore">
                    <ul>
                        <NavLinks />
                    </ul>
                </div>
                <div className="quik">
                    <h2>Quick Links</h2>
                    <a href="/">FreeTrasfer</a>
                    <a href="/">Test</a>
                </div>
            </div>
            <div className="social-media"></div>
            <div className="copyright">
                <p>Copyright © 2016 - 2021 Noé Krebs</p>
            </div>
        </footer>
    );
}