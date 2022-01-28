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
            <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Création d'un cours PDF</h2>
                </div>
                <div className="flex items-center">
                    <Link to="/profile/my-cours/create" className="flex items-center px-2 py-1 bg-green-600 text-gray-100 hover:bg-green-900 border rounded-md transition ease-in-out">
                        <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z" fill="currentColor"></path></svg>
                        <span className="w-full ml-2">Enregistré</span>
                    </Link>
                    <Link to="/profile/my-cours/create" className="ml-2 flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-800 hover:text-gray-100 border rounded-md transition ease-in-out">
                        <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7l-7 7z" fill="currentColor"></path></svg>
                        <span className="w-full ml-2">Publier</span>
                    </Link>
                </div>
            </div>
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
