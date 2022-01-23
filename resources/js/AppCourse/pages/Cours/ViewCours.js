import React from 'react'
import { useParams } from "react-router-dom";

export default function ViewCours() {
    let params = useParams();
    return (<div>
            Le Id du cours est {params.id}
        </div>)
}
