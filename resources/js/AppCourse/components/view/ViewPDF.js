import React from 'react'
import { Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

export default function ViewPDF({ content }) {
    return (<Viewer fileUrl={content} />)
}