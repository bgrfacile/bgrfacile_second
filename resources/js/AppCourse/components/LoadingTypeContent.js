import React from 'react'
import CreateContenuPDF from './CreateContenu/CreateContenuPDF'
import CreateContenuTEXTE from './CreateContenu/CreateContenuTEXTE'

export default function LoadingTypeContent({ typeContent, getContent, setContent }) {
    if (setContent !== undefined) {
        switch (new String(typeContent).toUpperCase()) {
            case 'PDF':
                return <CreateContenuPDF setContent={setContent} getContent={getContent} />
            case 'TEXTE':
                return <CreateContenuTEXTE setContent={setContent} getContent={getContent} />
            case 'IMAGE':
                return <p>Chargement de l'image</p>
            case 'VIDEO':
                return <p>Chargement de la video</p>
            case 'AUDIO':
                return <p>Chargement de l'audio</p>
            default:
                return <p>Aucun lecteur disponible pour ce type de contenue</p>
        }
    } else {
        switch (new String(typeContent).toUpperCase()) {
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
                return <p>Aucun lecteur disponible pour ce type de contenue</p>
        }
    }
}
