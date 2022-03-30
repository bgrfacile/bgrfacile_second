import React from 'react'
import parse from 'html-react-parser';

export default function ViewTEXTE({ content }) {
    return (
        <div className="prose prose-slate lg:prose-xl max-w-prose">
            {parse(content)}
        </div>
    )
}

const OldVersion = ({ contents }) => {
    return (
        <div className="prose prose-slate lg:prose-xl max-w-prose">
            {contents.map((content, index) => {
                return (
                    <div key={index}>
                        {parse(content.content)}
                    </div>
                    //  <div key={index} dangerouslySetInnerHTML={{ __html: content.content }} />
                )
            })}
        </div>
    )
}
