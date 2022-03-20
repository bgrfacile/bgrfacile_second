import React from 'react'

export default function CardItemExercice({ type, description }) {
  return (
    <div className=" flex flex-col bg-white pb-2">
    <div className="px-2 py-1 text-gray-700 bg-gray-200 font-semibold">
        {type}
    </div>
    <div className="h-28 w-full">
        <img src="https://picsum.photos/200/300" className="h-full w-full object-cover" />
    </div>
    <div className="p-2">
        {description} lorem ipsum
    </div>
</div>
  )
}
