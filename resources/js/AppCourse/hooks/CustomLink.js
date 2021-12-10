import React from 'react'
import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";

export default function CustomLink({ children, to,className,classActive, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    let active = match ? classActive : '';
// console.log(match);
    return (
        <div>
            <Link
                to={to}
                {...props}
                className={className + ' ' + active }
            >
                {children}
            </Link>
            {/* {match && " (active)"} */}
        </div>
    );
}
