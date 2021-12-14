import React from 'react'

export default function Search() {
    return (
        <div>
            <div className="flex relative mx-auto w-1/4 max-w-md">
                <input className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg " type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-2 top-3 mr-4">

                </button>
            </div>
        </div>
    )
}

