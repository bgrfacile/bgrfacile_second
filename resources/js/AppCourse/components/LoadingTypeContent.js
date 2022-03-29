import React from 'react'
import CreateContenuPDF from './CreateContenu/CreateContenuPDF'
import CreateContenuTEXTE from './CreateContenu/CreateContenuTEXTE'

export default function LoadingTypeContent({ typeContent, getContent }) {
    switch (typeContent) {
        case 'PDF':
            return <CreateContenuPDF getContent={getContent} />
        case 'TEXTE':
            return <CreateContenuTEXTE getContent={getContent} />
        case 'IMAGE':
            return <p>Chargement de l'image</p>
        case 'VIDEO':
            return <p>Chargement de la video</p>
        case 'AUDIO':
            return <p>Chargement de l'audio</p>
        default:
            return <p>Chargement du lecteur pdf</p>
    }
}
