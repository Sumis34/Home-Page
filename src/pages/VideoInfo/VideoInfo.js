import React from 'react'
import './VideoInfo.scss'
import { useParams } from "react-router-dom";
import VideoData from '../../data/cards.json'
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade'
import x from '../../assets/icons/x-mark-thin-light.svg'

export default function VideoInfo() {
    const params = useParams();
    const history = useHistory();
    let videoId = parseInt(params.id);

    function closeForm() {
        history.goBack();
    }

    if (typeof VideoData[videoId] === "undefined") {
        videoId = 0
        history.push('/video/0');
    }

    const videoInfo = VideoData[videoId];

    const img = require(`../../assets/images/${videoInfo.img}`).default;

    return (
        <div className="video-infos">
            <Fade bottom cascade>
                <img src={x} alt="x" id="close-contact-menu" onClick={() => closeForm()} />
            </Fade>
            <div className="video-content">
                <div className="infos">
                    <h1>Video id: {videoId}</h1>
                    
                </div>
                <div className="video">

                </div>
                <img src={img} className="bg-image" alt="" />
            </div>
        </div>
    )
}
