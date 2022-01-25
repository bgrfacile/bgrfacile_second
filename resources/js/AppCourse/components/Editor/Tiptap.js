import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './Tiptap.css'
import client from '../../../api/client';



const MenuBar = ({ editor }) => {
    const styleDefault = "mr-2 mb-2 px-2 py-1 border border-black rounded-md";
    const styleActive = "mr-2 mb-2 px-2 py-1 border border-black rounded-md font-semibold bg-gray-200";
    if (!editor) {
        return null
    }

    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? styleActive : styleDefault}
            >
                bold
            </button>

            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? styleActive : styleDefault}
            >
                italic
            </button>

            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? styleActive : styleDefault}
            >
                strike
            </button>

            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? styleActive : styleDefault}
            >
                code
            </button>

            <button className={styleDefault} onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                clear marks
            </button>

            <button className={styleDefault} onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? styleActive : styleDefault}
            >
                paragraph
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? styleActive : styleDefault}
            >
                h1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? styleActive : styleDefault}
            >
                h2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? styleActive : styleDefault}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? styleActive : styleDefault}
            >
                h4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? styleActive : styleDefault}
            >
                h5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? styleActive : styleDefault}
            >
                h6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? styleActive : styleDefault}
            >
                bullet list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? styleActive : styleDefault}
            >
                ordered list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? styleActive : styleDefault}
            >
                code block
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? styleActive : styleDefault}
            >
                blockquote
            </button>
            <button className={styleDefault} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                horizontal rule
            </button>
            <button className={styleDefault} onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button>
            <button className={styleDefault} onClick={() => editor.chain().focus().undo().run()}>
                undo
            </button>
            <button className={styleDefault} onClick={() => editor.chain().focus().redo().run()}>
                redo
            </button>
        </>
    )
}

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        editorProps: {
            attributes: {
                spellcheck: 'false',
            },
        },
        content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
    })

    const getData = (e) => {
        e.preventDefault();
        const htmlData = editor.getHTML()
        client.post('/cours', { name: 'cours1 miem 5', htmlData })
            .then(response => {
                console.log(response.data);
            }
            ).catch(error => {
                console.log(error);
            }
            );
    }

    return (
        <div>
            <button className="px-2 py-1 bg-green-400" onClick={getData}> get </button>
            <div className="mb-2">
                <MenuBar editor={editor} />
            </div>
            <EditorContent editor={editor} className="mb-2 p-2 border" />
        </div>
    )
}

export default Tiptap
