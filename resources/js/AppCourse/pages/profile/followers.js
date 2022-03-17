import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Followers() {
    const { followers, following, user_following, user_followers } = useSelector(state => state.user.profile)
    // useEffect(() => {
    //     getFollowers()
    //     getFollowing()
    // }, [])
    return (
        <div>
            <div className='py-4'>
                <div className='text-2xl font-bold'>Les utilisateurs que je suit {following} </div>
                <div className='flex flex-wrap justify-start'>
                    {user_following.map(user => <div className='w-1/3 p-2' key={user.id}>
                        <img className='rounded-full h-16 w-16 object-cover' src={user.url_image} alt={user.name} />
                        <div className='text-xl font-bold'>{user.name}</div>
                    </div>)}
                </div>
            </div>

            <div className='py-4'>
                <div className='text-2xl font-bold'>Les utilisateurs qui m'ont suivi {followers} </div>
                <div className='flex flex-wrap justify-start'>
                    {user_followers.map(user => <div className='w-1/3 p-2' key={user.id}>
                        <img className='rounded-full h-16 w-16 object-cover' src={user.url_image} alt={user.name} />
                        <div className='text-xl font-bold'>{user.name}</div>
                    </div>)}
                </div>
            </div>

        </div>
    )
}
