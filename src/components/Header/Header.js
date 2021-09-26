import React, { Component } from 'react'
import './header.scss';
// import blob from '../../assets/design-elements/blob-1.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="row">
                    <div className="col">
                        <h1 className="title">Noé Krebs</h1>
                        <h2 className="sub-title">Development and design</h2>
                    </div>
                    <div className="col col-2">
                    </div>
                </div>
            </header>
        );
    }
}