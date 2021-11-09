import React, { useState } from 'react'
import './VideoInfo.scss'
import { useParams } from "react-router-dom";
import VideoData from '../../data/cards.json'
import { useHistory } from 'react-router-dom';

export default function VideoInfo() {
    const params = useParams();
    const history = useHistory();
    let videoId = parseInt(params.id);

    if (typeof VideoData[videoId] === "undefined") {
        videoId = 0
        history.push('/video/0');
    }

    const videoInfo = VideoData[videoId];
    
    const img = require(`../../assets/images/${videoInfo.img}`).default;

    return (
        <div>
            <h1>Video id: {videoId}</h1>
            <img src={img} alt="" />
        </div>
    )
}
