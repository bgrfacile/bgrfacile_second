import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { ProgressBar } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { fullScreenPlugin, ExitFullScreenIcon, FullScreenIcon } from '@react-pdf-viewer/full-screen';
import { attachmentPlugin } from '@react-pdf-viewer/attachment';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/bookmark/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/attachment/lib/styles/index.css';
import { Alert, AlertTitle } from '@mui/material';
import { formatBytes } from '../../utils/Function';

export default function CreateContenuPDF({ getContent }) {
    const toolbarPluginInstance = toolbarPlugin();
    const bookmarkPluginInstance = bookmarkPlugin();
    const fullScreenPluginInstance = fullScreenPlugin();
    const attachmentPluginInstance = attachmentPlugin();
    const viewerInstance = Viewer({
        plugins: [
            toolbarPluginInstance,
            bookmarkPluginInstance,
            fullScreenPluginInstance,
            attachmentPluginInstance,
        ],
        defaultPage: 1,
        defaultZoomLevel: SpecialZoomLevel.PageWidth,
        defaultFullScreenViewer: true,
        defaultAttachmentViewer: true,
        defaultBookmarksViewer: true,
        defaultToolbarViewer: true,
        defaultFullScreenIcon: <FullScreenIcon />,
        defaultExitFullScreenIcon: <ExitFullScreenIcon />,
        defaultProgressBar: <ProgressBar />,
        defaultAttachmentIcon: <Link to="/">
            <img src="https://react-pdf-viewer.js.org/assets/attachment.svg" alt="Attachment" />
        </Link>,
        defaultBookmarkIcon: <Link to="/">
            <img src="https://react-pdf-viewer.js.org/assets/bookmark.svg" alt="Bookmark" />
        </Link>,
        defaultToolbarIcon: <Link to="/">
            <img src="https://react-pdf-viewer.js.org/assets/toolbar.svg" alt="Toolbar" />
        </Link>,
        defaultFullScreenButton: true,
        defaultAttachmentButton: true,
        defaultBookmarkButton: true,
        defaultToolbarButton: true,
        defaultFullScreenViewer: true,
        defaultAttachmentViewer: true,
        defaultBookmarksViewer: true,
        defaultToolbarViewer: true,
        defaultToolbarButton: true,
        defaultToolbarButton: true,
        defaultToolbarButton: true,
        defaultToolbarButton: true,
        defaultToolbarButton: true,
        defaultToolbarButton: true,
        defaultToolbarButton: true,

    });
    const [url, setUrl] = useState('');
    // const [pdf, setPdf] = useState(null);
    const [isError, setIsError] = useState(false);
    const [messageError, setMessageError] = useState('');
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            {isError && <Alert onClose={() => { setIsError(false) }} className='h-fit w-full' severity="error">
                {messageError && <span>{messageError}</span>}
            </Alert>}
            <div className='h-fit w-full flex items-center justify-start mb-2'>
                <h4 className='text-lg uppercase font-semibold text-center my-2'>Téléchargez votre cours en version PDF.</h4>
                <input
                    className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                        const files = e.target.files;
                        if (parseInt(files[0].size) > 100000000) {
                            setIsError(true);
                            setMessageError('Le fichier est trop volumineux , il doit être inférieur à 100Mo');
                            return;
                        }
                        if (files && files.length === 1) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                // setUrl(URL.createObjectURL(files[0]));
                                setUrl(e.target.result);
                            };
                            reader.readAsDataURL(files[0]);
                            console.log('data', files[0]);
                            getContent(files[0])
                        }
                    }}
                />
            </div>
            <div className='flex-1 h-full w-full flex flex-col justify-center items-center'>
                {url ?
                    (<div className='w-full h-full border-solid rounded-md border-gray-300'>
                        <Viewer
                            fileUrl={url}
                            renderLoader={(percentages) => (
                                <div style={{ width: '240px' }}>
                                    <ProgressBar progress={Math.round(percentages)} />
                                </div>
                            )} />
                    </div>) :
                    (<div className='w-full h-full flex justify-center items-center text-3xl border-2 border-dashed border-gray-300 rounded-md'>
                        Zone d'aperçu
                    </div>)
                }
            </div>
        </div>
    )
}
