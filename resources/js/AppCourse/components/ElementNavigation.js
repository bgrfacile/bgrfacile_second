import React, { useState } from 'react'

export default function ElementNavigation({ label,children, onClick, isActive, className }) {
    const [onHover, setOnHover] = useState(false)

    return (
        <div onClick={() => setOnHover(!onHover)} className={className}>
            {children}
            {label}
        </div>
    )
}
