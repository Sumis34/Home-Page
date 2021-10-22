import React from 'react'
import './workCard.scss'

export default function WorkCard(props) {
    return (
        <>
            <div className="work-card-body">
                <div className="work-card-header">
                    <h2 className="work-card-title">{props.title}</h2>
                    <h3 className="work-card-description">{props.description}</h3>
                </div>
                <div className="work-card-wrap">
                    <a href={props.link} className="work-card-link">{props.linkTitel}</a>
                </div>
                <img src={props.img} alt="Logo" />
            </div>
        </>
    )
}