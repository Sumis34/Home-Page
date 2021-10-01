import React, { Component } from 'react'
import './header.scss';
// import blob from '../../assets/images/blob.png'
import bg from '../../assets/videos/FebruarWeb-1.m4v'
export default class Header extends Component {
    render() {
        return (
            <header>
                <video src={bg} autoPlay muted loop poster="posterimage.jpg">
                    Sorry, your browser doesn't support embedded videos
                </video>
                <div className="row">
                    <div className="col">
                        <h1 className="title">Noé Krebs</h1>
                        <h2 className="sub-title">Development and design</h2>
                    </div>
                    {/* <div className="col col-4">
                        <img className="blob" src={blob} alt="himmel"/>
                    </div> */}
                </div>
            </header>
        );
    }
}