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
import HeaderCreateCours from '../../../components/HeaderCreateCours';

export default function CreateCoursPdf() {
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
    const [name, setName] = useState('');
    const handleChangeUrl = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData();
        // data.append('file', url);
        // data.append('name', name);
        // fetch('http://localhost:8000/api/cours/pdf', {
        //     method: 'POST',
        //     body: data,
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit} className="min-h-full flex flex-col ">
            <HeaderCreateCours
                title={"Création d'un cours PDF"}
                linkSave={'/profile/my-cours/create'}
                linkPublish={'/profile/my-cours/create'}
            />
            <div className='w-full flex flex-col md:flex-row'>
                <div className='w-80 pr-4'>
                    <h3>Information du cours</h3>
                    <div className='mb-2'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            placeholder='Nom du cours'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="border border-dashed border-gray-500 relative">
                        <input
                            onChange={handleChangeUrl}
                            type="file"
                            accept=".pdf"
                            multiple
                            className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
                        <div className="text-center p-10 absolute top-0 right-0 left-0 botton-0 m-auto">
                            <h4>Déposez votre fichiers PDF ici</h4>
                        </div>
                    </div>
                </div>
                <div className='w-full' style={{ height: '750px' }}>

                    {url ? (
                        <div className='w-full h-full border-solid rounded-md border-gray-300'>
                            <Viewer
                                fileUrl={url}
                                renderLoader={(percentages) => (
                                    <div style={{ width: '240px' }}>
                                        <ProgressBar progress={Math.round(percentages)} />
                                    </div>
                                )} />
                        </div>
                    ) : (
                        <div className='flex justify-center items-center text-3xl h-full w-full border-2 border-dashed border-gray-300 rounded-md'>
                            Zone d'aperçu
                        </div>
                    )}
                </div>
            </div>

        </form>
    )
}
