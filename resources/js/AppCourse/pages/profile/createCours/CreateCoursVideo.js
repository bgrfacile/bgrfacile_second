import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

export default function CreateCoursVideo() {
    return <Player
        playsInline
        poster="/img/formation.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />;
}
