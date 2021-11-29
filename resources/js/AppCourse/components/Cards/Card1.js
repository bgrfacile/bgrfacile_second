import React from 'react'

export default function Card1() {
    return (
        <div class="flex my-10">
            <div class="bg-white w-1/2 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/400x300" alt="" class="w-full object-cover object-center" />
                <div class="p-4">
                    <p class="mb-1 text-gray-900 font-semibold">Card Title</p>

                    <span class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit hic ab quos eos
                        quisquam labore minus, dignissimos porro explicabo distinctio.</span>

                    <div class="mt-8 mb-3">
                        <a href="#"
                            class="px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400">Card
                            Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
