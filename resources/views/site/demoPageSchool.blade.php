<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body class="md:px-8 px-0 bg-gray-200">

    <div class="md:my-8 my-0 mx-auto max-w-screen-lg bg-white md:border-t-2 border-gray-400">
        <header class="">
            <div class="flex flex-row py-14 px-20">
                <div class="flex-grow">
                    <h1 class="text-3xl font-semibold">Twenty Eleven</h1>
                    <h2 class="text-sm text-gray-500">The 2011 theme is sophisticated, lightweight, and adaptable.</h2>
                </div>
                <div>
                    <input type="text" placeholder="Search"
                        class="w-20 focus:w-48 px-3 py-1 text-sm text-gray-400 focus:text-black placeholder-gray-600 border border-gray-300 outline-none focus:outline-none rounded-sm shadow-inner transition-all duration-300">
                </div>
            </div>
            <a href="#">
                <img src="https://wp-themes.com/wp-content/themes/twentyeleven/images/headers/pine-cone.jpg"
                    alt="Twenty Eleven" class="w-full">
            </a>
            <nav class="px-20 bg-gray-900 bg-gradient-to-b from-gray-800 to-gray-900 text-sm text-white shadow">
                <ul class="flex">
                    <li class="px-3 py-3 hover:bg-white hover:text-black"><a href="#">Home</a></li>
                    <li class="px-3 py-3 hover:bg-white hover:text-black"><a href="#">About</a></li>
                    <li class="px-3 py-3 hover:bg-white hover:text-black"><a href="#">Home</a></li>
                    <li class="hover:bg-white hover:text-black relative group">
                        <div class="px-3 py-3">
                            <a href="#">Parent Page</a>
                        </div>
                        <ul
                            class="absolute hidden group-hover:block px-3 py-3 bg-white hover:bg-gray-100 rounded-sm shadow-md w-44">
                            <li><a href="#">Sub-page</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="flex py-12 px-20">
            <div class="flex-grow grid grid-cols-1 gap-8 mr-20 divide-y">

                <article>
                    <header>
                        <h1 class="pr-20 pb-4">
                            <a href="#" class="text-2xl font-semibold hover:text-blue-500">Worth A Thousand Words</a>
                        </h1>
                        <div class="text-xs text-gray-600">
                            <span class="">Posted on </span>
                            <a href="#" title="4:33 am" rel="bookmark"
                                class="text-blue-500 font-semibold hover:underline">
                                <time datetime="2008-10-17T04:33:51+00:00">October 17, 2008</time>
                            </a>
                        </div>
                    </header>
                    <div class="py-8">
                        <div class="p-4 mb-6 w-max bg-gray-200">
                            <img loading="lazy" class="wp-image-59" alt="Boat"
                                src="https://wpdotorg.files.wordpress.com/2008/11/boat.jpg" width="435" height="288">
                            <p class="pt-4 pb-2 text-sm text-gray-600 font-serif">&mdash; Boat</p>
                        </div>
                        <p>Boat.</p>
                    </div>
                    <footer class="text-xs text-gray-600">
                        <span>Posted in</span>
                        <a href="#" rel="category" class="text-blue-500 font-semibold hover:underline">Uncategorized</a>
                        <span> | </span>
                        <span>Tagged</span>
                        <a href="#" rel="tag" class="text-blue-500 font-semibold hover:underline">boat</a>, <a href="#"
                            rel="tag" class="text-blue-500 font-semibold hover:underline">lake</a>
                    </footer>
                </article>
                <article>
                    <header>
                        <h1 class="pr-20 pb-4 mt-12">
                            <a href="#" class="text-2xl font-semibold hover:text-blue-500">Tailwind is gud</a>
                        </h1>
                        <div class="text-xs text-gray-600">
                            <span class="">Posted on </span>
                            <a href="#" title="4:33 am" rel="bookmark"
                                class="text-blue-500 font-semibold hover:underline">
                                <time datetime="2008-09-05T19:39:12+00:00">September 5, 2008</time>
                            </a>
                        </div>
                    </header>
                    <div class="py-8">
                        <p>
                            <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">download</a> le
                            tailwind.
                            its da best in da world.
                            the <a href="https://wordpress.org/themes/twentyeleven/"
                                class="text-blue-500 hover:underline">theme</a> original.
                        </p>
                    </div>
                    <footer class="text-xs text-gray-600">
                        <span>Posted in</span>
                        <a href="#" rel="category" class="text-blue-500 font-semibold hover:underline">Uncategorized</a>
                    </footer>
                </article>
                <article>
                    <header>
                        <h1 class="pr-20 pb-4 mt-12">
                            <a href="#" class="text-2xl font-semibold hover:text-blue-500">More Tags</a>
                        </h1>
                        <div class="text-xs text-gray-600">
                            <span class="">Posted on </span>
                            <a href="#" title="4:33 am" rel="bookmark"
                                class="text-blue-500 font-semibold hover:underline">
                                <time datetime="2008-06-21T00:09:24+00:00">June 21, 2008</time>
                            </a>
                        </div>
                    </header>
                    <div class="py-8">
                        <p>
                            More of these posts need tags.
                        </p>
                    </div>
                    <footer class="text-xs text-gray-600">
                        <span>Posted in</span>
                        <a href="#" rel="category" class="text-blue-500 font-semibold hover:underline">Uncategorized</a>
                        <span> | </span>
                        <span>Tagged</span>
                        <a href="#" rel="tag" class="text-blue-500 font-semibold hover:underline">Tailwind</a>
                    </footer>
                </article>

            </div>
            <aside class="w-48 text-sm text-gray-500">
                <h3 class="mb-2 uppercase text-xs font-mono">Archives</h3>
                <ul class="mb-8 list-square font-semibold">
                    <li><a href="#" class="text-blue-500 hover:underline">October 2008</a></li>
                    <li><a href="#" class="text-blue-500 hover:underline">September 2008</a></li>
                    <li><a href="#" class="text-blue-500 hover:underline">June 2008</a></li>
                </ul>
                <h3 class="mb-2 uppercase text-xs font-mono">Meta</h3>
                <ul class="mb-8 list-square font-semibold">
                    <li><a href="#" class="text-blue-500 hover:underline">Log in</a></li>
                </ul>
            </aside>
        </div>
        <footer class="py-6 px-1 text-center bg-gray-100 border-t border-gray-200">
            <a href="#" class="text-xs font-bold text-gray-600 hover:underline">Proudly powered by Tailwind CSS</a>
        </footer>
    </div>

</body>

</html>
