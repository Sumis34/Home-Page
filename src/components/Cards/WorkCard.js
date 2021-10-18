import React from 'react'
import './workCard.scss'

import img from '../../assets/images/silvaplana.jpeg'

export default function WorkCard() {
    return (
        <>
            <div className="place-holder"></div>
            <div className="work-card-body">
                
                <div className="work-card-header">
                    <h2 className="work-card-title">Engadin</h2>
                    <h3 className="work-card-description">Persönliches Projekt</h3>
                </div>
                <div className="work-card-wrap">
                    <a href="" className="work-card-link">Video auf Youtube schauen</a>
                </div>
                <img src={img} alt="Logo" />
            </div>

        </>
    )
}