import React from 'react'
import './VideoInfo.scss'
import { useParams } from "react-router-dom";
import VideoData from '../../data/cards.json'
import { useHistory } from 'react-router-dom';
import x from '../../assets/icons/x-mark-thin-light.svg'
import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal'

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
            <img src={x} alt="x" id="close-contact-menu" className="close-btn" onClick={() => closeForm()} />

            <div className="video-content">
                <Fade bottom cascade>
                    <div className="infos">
                        <h1>{videoInfo.title}</h1>
                        <p>{videoInfo.description}</p>
                        <p className="date">{videoInfo.date}</p>
                    </div>
                </Fade>
                <div className="video">
                    <iframe src={videoInfo.link} title="YouTube video player" className="yt-video video-reveal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="bg-image">
                <img src={img} alt="Background" />
            </div>
        </div>
    )
}
