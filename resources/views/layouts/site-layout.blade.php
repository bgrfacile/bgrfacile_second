<!--
  _                 __           _ _
 | |               / _|         (_) |
 | |__   __ _ _ __| |_ __ _  ___ _| | ___
 | '_ \ / _` | '__|  _/ _` |/ __| | |/ _ \
 | |_) | (_| | |  | || (_| | (__| | |  __/
 |_.__/ \__, |_|  |_| \__,_|\___|_|_|\___|
         __/ |
        |___/ By Bendo Matondo Bénaja
-->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="mytheme">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'bgrfacile') }}</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        * {
            font-family: 'Poppins', sans-serif;
        }

    </style>
    <!-- script -->
    <script src="{{ asset('js/app.js') }}" defer></script>

</head>

<body class="font-sans antialiased text-black" style="background-color: #e5e5f7;
opacity: 0.8;
background-image: radial-gradient(#2196F3 0.5px, #e5e5f7 0.5px);
background-size: 10px 10px;">
    <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-700">
        @include('layouts.navigavation-site')

        <!-- Page Heading -->
        {{ $header }}

        <!-- Page Content -->
        <main>
            {{ $slot }}
        </main>
    </div>

    <footer class="relative bg-blueGray-200 pt-8 pb-6 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto sm:px-6 p-6 lg:px-8">
            <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4">
                    <h4 class="text-3xl font-semibold text-black dark:text-gray-200">bgrfacile</h4>
                    <h5 class="text-lg mt-0 mb-2 text-blueGray-600 dark:text-gray-400">
                        Un apprentissage de marque et un pont vers la connaissance.
                    </h5>
                    <div class="mt-6 lg:mb-0 mb-6">
                        <a href="#" target="_blank"
                            class="bg-blue-500 mx-0.5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                            <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span>Facebook</span>
                            </button>
                            <a href="#" target="_blank"
                                class="bg-blue-300 mx-0.5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                <span>Twitter</span>
                            </a>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                            <span class="block uppercase text-black text-lg font-bold mb-2 dark:text-gray-200">
                                Pages
                            </span>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="">À propos de nous</a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="">Home</a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="">Profil</a>
                                </li>
                            </ul>
                        </div>
                        {{-- <div class="w-full lg:w-4/12 px-4">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other
                                Resources</span>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT
                                        License</a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                </li>
                            </ul>
                        </div> --}}
                    </div>
                </div>
            </div>
            <hr class="my-6 border-blueGray-300">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 dark:text-gray-200 font-semibold py-1">
                        Copyright © <span id="get-current-year">2021</span><a href="https://bgrfacile.com/"
                            class="text-blueGray-500 hover:text-gray-800" target="_blank"> Bgrfacile by
                            <a href="#" class="text-blueGray-500 hover:text-blueGray-800">Bénaja Bendo M.</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>
<!--


                    ,,,,,,                           ,,,,,(
                     ,,,,,,,,%                   ,,,,,,,,,
           ,,,,,,,,/       ,,,,,               ,,,,%      ,,,,,,,,%
          ,,,,,,,,,,,,,,       (,,           ,,       ,,,,,,,,,,,,,,
    (((((      (,,,,,,,,,,,,      #        ,      ,,,,,,,,,,,,%
    (((((((((((      ,,,,,,,,,,,              ,,,,,,,,,,,       (((((((((
    (((((((((((((((((     ,,,,,,,,,       *,,,,,,,,/      ((((((((((((((((((
    (((((((((((((((((((((((    %,,,,,/  ,,,,,,      ((((((((((((((((((((((((((
    ((((((((((((((((((((((((((((     /  ,     ((((((((((((((((((((((((((((((((/
    ((((((((((((((((((((((((((((  (((((((((( ((((((((((((((((((((((((#(((((((((
    ((((((((((((((((((((((((((((  (((((((((( (((((((((((((((((((     (((((((((/
    ((((((((((((((((((((((((((((  (((((((((( (((((((((((((     #((((((((((((((
    ((((((((((((((((((((((((((((  (((((((((( (((((((.    .((((((((((((((((((
    ((((((((((((((((((((((((((((  (((((((((( ((((   ((((((((((((((((((((((
    ((((((((((((((((((((((((((((  (((((((((( ((((((((((((((((((((%     (((((
    ((((((((((((((((((((((((((((  (((((((((( (((((((((((((((     ((((((((((((*
    ((((((((((((((((((((((((((((  (((((((((( (((((((((     %((((((((((((((((((
    ((((((((((((((((((((((((((((  (((((((((( ((((#    (((((((((((((((((((((((((
    ((((((((((((((((((((((((((((  (((((((((( ((((((((((((((((((((((    /(((((((
    ((((((((((((((((((((((((((((  (((((((((( ((((((((((((((((     %(((((((((((
    ((((((((((((((((((((((((((((  (((((((((( ((((((((((/     ((((((((((((((((
     (((((((((((((((((((((((((((  (((((((((( (((((     (((((((((((((((((((
           (((((((((((((((((((((  (((((((((( (((((((((((((((((((((((
                 (((((((((((((((  (((((((((* (((((((((((((((((
                       (((((((((  (((((((((* ((((((((((
                             (((  (((((((((  ((((
                                     (((

-->
