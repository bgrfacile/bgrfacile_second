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
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'bgrfacile') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    {{-- <link rel="stylesheet" href="{{ mix('css/appCourse.css') }}"> --}}

    <!-- Scripts -->
    {{-- <script src="{{ mix('js/appCourse.js') }}" defer></script> --}}
</head>

<body class="font-sans antialiased">

    <nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center  flex-wrap sm:flex-nowrap  ">
            <a href="/components" class="flex-none text-gray-900">
                <span class="sr-only">Tailwind UI</span>
                <svg aria-hidden="true" viewBox="0 0 160 24" fill="none" class="w-auto h-6">
                    <path
                        d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                        fill="#06B6D4"></path>
                    <path
                        d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
                        fill="currentColor"></path>
                </svg>
            </a>
            <p
                class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
                <span class="hidden xl:inline">Beautiful UI components by the creators of Tailwind CSS</span>
                <span class="xl:hidden">by the creators of Tailwind CSS</span>
            </p>
            <div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
                <a href="/documentation" class="hover:text-gray-900">
                    <abbr class="sm:hidden" title="Documentation">Docs</abbr>
                    <span class="hidden sm:inline">Documentation</span>
                </a>
                <a href="/pricing" class="mx-6 hover:text-gray-900">Pricing &amp; <abbr
                        title="frequently asked questions">FAQ</abbr></a>
                <a href="/login" class="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
                    Sign in
                    <svg aria-hidden="true" width="11" height="10" fill="none"
                        class="flex-none ml-1.5 text-gray-400 group-hover:text-teal-600">
                        <path
                            d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z"
                            fill="currentColor"></path>
                    </svg>
                </a>
            </div>
        </div>
    </nav>

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
