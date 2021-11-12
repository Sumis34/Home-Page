import React from 'react'
import './VideoInfo.scss'
import { useParams } from "react-router-dom";
import VideoData from '../../data/cards.json'
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade'
import x from '../../assets/icons/x-mark-thin-light.svg'
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
                <Reveal effect="fadeInUp">
                    <div className="infos">
                        <h1>{videoInfo.title}</h1>
                        <p>{videoInfo.description}</p>
                        <p className="date">{videoInfo.date}</p>
                    </div>
                </Reveal>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/b4vF_8mZ320?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="bg-image">
                <img src={img} alt="Background" />
            </div>
        </div>
    )
}
