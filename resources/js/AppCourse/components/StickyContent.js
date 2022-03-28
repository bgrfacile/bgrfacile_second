import React from 'react'

export default function StickyContent(props) {
    return (
        <div className="sticky top-0 bg-white rounded-sm w-full flex flex-col mb-4">
            {props.children}
        </div>
    )
}
