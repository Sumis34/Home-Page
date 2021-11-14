import React from 'react'
import './workCard.scss'

export default function WorkCard(props) {
    return (
        <div className="work-card-body" onClick={() => props.onClick(props.id)}>
            <div className={(props.textColor) + " work-card-header"}>
                <h2 className="work-card-title">{props.title}</h2>
                <h3 className="work-card-description">{props.type}</h3>
            </div>
            <img src={require(`../../assets/images/${props.img}`).default} alt="Logo" />
        </div>
    )
}