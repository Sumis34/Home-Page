import React from 'react'
import './VideoInfo.scss'
import { useParams } from "react-router-dom";

export default function VideoInfo() {
    const params = useParams();
    return (
        <div>
            <h1>Video id: {params.id}</h1>
        </div>
    )
}
