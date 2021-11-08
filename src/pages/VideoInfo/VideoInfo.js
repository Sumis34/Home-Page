import React, { useState, useEffect } from 'react'
import './VideoInfo.scss'
import { useParams } from "react-router-dom";
import VideoData from '../../data/cards.json'
import { useHistory } from 'react-router-dom';

export default function VideoInfo() {
    const params = useParams();
    const history = useHistory();
    const [videoId, setVideoId] = useState(params.id);

    const videoInfo = VideoData[videoId];

    if (typeof videoInfo === "undefined") {
        setVideoId(0);
        history.push('/video/0');
    }
    
    return (
        <div>
            <h1>Video id: {videoId}</h1>
            <img src={require(`../../assets/images/${VideoData[videoId].img}`).default} alt="" />
        </div>
    )
}
