import React from 'react'

export default function ShowByRoleUser({ rolesUser, acceptRole, children }) {
    return (<>
        {rolesUser.map((role, index) => {
            if (acceptRole.includes(role.name)) {
                return children
            }
        })}
    </>)
}
