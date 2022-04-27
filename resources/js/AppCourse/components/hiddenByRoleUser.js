import React from 'react'

export default function HiddenByRoleUser({ rolesUser, acceptRole, children }) {
    return (<>
        {rolesUser.map((role, index) => {
            if (acceptRole.includes(role.name)) {
                return
            }else{
                return children
            }
        })}

    </>)
}
