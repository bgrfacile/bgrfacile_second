import React from 'react'
import ViewPDF from './ViewPDF';
import ViewTEXTE from './ViewTEXTE';

export default function ShowByTypeContent({ content }) {
    switch (new String(content.type_content).toUpperCase()) {
        case 'PDF':
            return <ViewPDF content={content.content} />
        case 'TEXTE':
            return <ViewTEXTE content={content.content} />
        case 'IMAGE':
            return <p>Chargement de l'image</p>
        case 'VIDEO':
            return <p>Chargement de la video</p>
        case 'AUDIO':
            return <p>Chargement de l'audio</p>
        default:
            return <p> Aucun lecteur trouver  </p>
    }
}
