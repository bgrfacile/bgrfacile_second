import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { content } from './content.js'
import './styles.css'

const MenuBar = ({ editor, setContent }) => {
    if (!editor) {
        return null
    }

    const isActiveStyle = "w-full flex justify-center items-center p-1 mr-1 bg-gray-800 text-gray-100 rounded-sm cursor-pointer ease-in-out duration-200"
    const isNotActiveStyle = "w-full flex justify-center items-center p-1 mr-1 bg-white text-gray-800 hover:bg-gray-800 hover:text-gray-100 rounded-sm cursor-pointer ease-in-out duration-200"
    setContent(editor.getHTML())

    return (<>
        {/* <button onClick={}></button> */}
        <div className="flex items-center bg-white border-b pt-1 pb-2 px-2 w-full h-auto rounded-t-lg shadow">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77c.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 256 256"><path d="M224 128a8 8 0 0 1-8 8h-40.1c9.2 7.1 16.1 17.2 16.1 32s-7 25.7-19.8 34.8S144.6 216 128 216s-32.3-4.7-44.2-13.2S64 181.3 64 168a8 8 0 0 1 16 0c0 17.3 22 32 48 32s48-14.7 48-32c0-14.9-10.5-23.6-38.8-32H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8zM76.3 104a6.9 6.9 0 0 0 2.5-.4a8 8 0 0 0 5.1-10.1a19.2 19.2 0 0 1-.8-5.5c0-18.2 19.3-32 44.9-32c19.5 0 36.1 8.3 42.3 21a8.1 8.1 0 0 0 10.7 3.7a7.9 7.9 0 0 0 3.7-10.7c-9-18.5-30.7-30-56.7-30c-34.7 0-60.9 20.6-60.9 48a36 36 0 0 0 1.6 10.5a8 8 0 0 0 7.6 5.5z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2v-2H8v-5a2 2 0 0 0-2-2a2 2 0 0 0 2-2V5h2V3m6 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3h2z" fill="currentColor"></path></svg>
            </button>
            <button className={isNotActiveStyle} onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21L18 19.73L3.55 5.27L3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68l2.1 2.1L14.21 8H20V5H6z" fill="currentColor"></path></svg>
            </button>
            <button className={isNotActiveStyle} onClick={() => editor.chain().focus().clearNodes().run()}>
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" d="M10 4a2 2 0 1 1 4 0v6h6v4H4v-4h6V4zM4 14h16v8H4v-8zm12 8v-5.635M8 22v-5.635M12 22v-5.635"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M13 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2v6H9V4h4m0 6a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2v4h2z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8v32"></path><path d="M25 8v32"></path><path d="M6 24h19"></path><path d="M34.226 24L39 19.017V40"></path></g></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8v32"></path><path d="M24 8v32"></path><path d="M7 24h16"></path><path d="M32 25c0-3.167 2.667-5 5-5s5 1.833 5 5c0 5.7-10 9.933-10 15h10"></path></g></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8v32"></path><path d="M24 8v32"></path><path d="M7 24h16"></path><path d="M32 20h10l-7 9c4 0 7 2 7 6s-3 5-5 5c-2.381 0-4-1-5-2.1"></path></g></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><g fill="none"><path d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2z" fill="currentColor"></path><path d="M22 17.96V16h-1v-3.08h-2V16h-3l3.5-8h-2.08L14 16v1.96h5V20h2v-2.04h1z" fill="currentColor"></path></g></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><g fill="none"><path d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2z" fill="currentColor"></path><path d="M21.745 9.92V8h-6.118l-1.142 6.09l1.846.868a2.087 2.087 0 0 1 1.59-.718c1.127 0 2.04.86 2.04 1.92s-.913 1.92-2.04 1.92c-.93 0-1.715-.587-1.96-1.39L14 17.219C14.488 18.825 16.059 20 17.922 20C20.175 20 22 18.282 22 16.16s-1.825-3.84-4.078-3.84c-.367 0-.721.045-1.058.13l.473-2.53h4.408z" fill="currentColor"></path></g></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><g fill="none"><path d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2z" fill="currentColor"></path><path d="M17.999 12.32L20.597 8h-2.309l-3.742 6.222A3.71 3.71 0 0 0 14 16.16c0 2.122 1.79 3.84 4 3.84s4-1.718 4-3.84s-1.791-3.84-4.001-3.84zM16 16.16c0-1.06.895-1.92 2-1.92s2 .86 2 1.92s-.895 1.92-2 1.92s-2-.86-2-1.92z" fill="currentColor"></path></g></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M7 5h14v2H7V5m0 8v-2h14v2H7M4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2H7m-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M2 10.998v-1h3v.9l-1.8 2.1H5v1H2v-.9l1.8-2.1H2zm1-3v-3H2v-1h2v4H3zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1v-.5H2zM20 6v1H7V6h13zm0 6v1H7v-1h13zm0 6v1H7v-1h13z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" fill="currentColor"></path><path d="M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z" fill="currentColor"></path></svg>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? isActiveStyle : isNotActiveStyle}
            >
                <svg className='h-4 w-4' viewBox="0 0 24 24"><g className="icon-tabler" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15h15"></path><path d="M21 19H6"></path><path d="M15 11h6"></path><path d="M21 7h-6"></path><path d="M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"></path><path d="M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"></path></g></svg>
            </button>
            <button className={isNotActiveStyle} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <svg className='h-4 w-4' viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 11h16v2H4z" fill="currentColor"></path></svg>
            </button>
            <button className={isNotActiveStyle} onClick={() => editor.chain().focus().setHardBreak().run()}>
                <svg className='h-4 w-4' viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9h36"></path><path d="M6 19h36"></path><path d="M6 29h18"></path><path d="M6 39h10"></path><path d="M24 39h13a5 5 0 0 0 0-10h-5m-8 10l4-4m-4 4l4 4"></path></g></svg>
            </button>
            <div className='flex border-x'>
                <button className={isNotActiveStyle} onClick={() => editor.chain().focus().undo().run()}>
                    <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="currentColor"></path></svg>
                </button>
                <button className={isNotActiveStyle} onClick={() => editor.chain().focus().redo().run()}>
                    <svg className='h-4 w-4' viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" fill="currentColor"></path></svg>
                </button>
            </div>
        </div>
    </>
    )
}

export default ({ setContent }) => {
    const [contents, setContents] = useState("saisie ton contenu ici ...");

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: contents,
        editorProps: {
            attributes: {
                spellcheck: 'false',
                class: 'prose prose-slate lg:prose-lg prose-sm sm:prose xl:prose-xl focus:outline-none mx-auto mt-3 px-2 h-24 min-h-0 hover:min-h-full',
            },
        },
        // onUpdate: ({ value }) => {
        //     // setContents(value.toJSON());
        //     setContent(value);
        // }
    })


    return (<div className="w-full h-full flex flex-col border-2 border-gray-900 rounded-lg py-2 pt-0">
        <MenuBar setContent={setContent} editor={editor} />
        <div className="flex-1 overflow-y-scroll">
            <EditorContent editor={editor} />
        </div>
    </div>)
}

