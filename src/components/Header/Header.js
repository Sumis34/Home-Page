import React from 'react'
import './header.scss';
// import blob from '../../assets/images/blob.png'
import bg from '../../assets/videos/FebruarWeb-1.m4v'
export default function Header() {
        return (
            <header>
                <video src={bg} autoPlay muted loop poster="posterimage.jpg">
                    Sorry, your browser doesn't support embedded videos
                </video>
                <div className="row">
                    <div className="col">
                        <h1 className="title">Noé Krebs</h1>
                        <h2 className="sub-title">Development and design</h2>
                        {/* <button type="button" className="btn btn-primary">Hallo</button> */}
                    </div>
                </div>
                {/* <p>47° 1' 41.3544" 7° 24' 47.5194"</p> */}
            </header>
        );
}