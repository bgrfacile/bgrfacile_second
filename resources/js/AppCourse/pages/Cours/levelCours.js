import React from 'react'
import { useParams } from 'react-router-dom';

export default function LevelCours() {
    let params = useParams();
    console.log('params', params);
    return (
        <div>LevelCours</div>
    )
}
