<!--
  _                 __           _ _
 | |               / _|         (_) |
 | |__   __ _ _ __| |_ __ _  ___ _| | ___
 | '_ \ / _` | '__|  _/ _` |/ __| | |/ _ \
 | |_) | (_| | |  | || (_| | (__| | |  __/
 |_.__/ \__, |_|  |_| \__,_|\___|_|_|\___|
         __/ |
        |___/ Bendo Matondo Bénaja
-->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="APP_URL" content="{{ env('APP_URL') }}">
    <meta name="description" content=" Un apprentissage de marque et un pont vers la connaissance.
        Ce site web est là pour vous permettre de trouver facilement du contenue
        scolaire et éducatif propre aux contextes africain.">
    <meta name="keywords" content=" apprentissage, un pont vers la connaissance, bgrfacile, bgrfacile.com,
        site web, trouver facilement du contenue
        scolaire, contenue éducatif, contextes africain, afrique, ecole,">
    <meta name="application-name" content="bgrfacile" />
    <meta name="robots" content="index" />
    <title>{{ config('app.name', 'bgrfacile') }}</title>

    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="icon" sizes="16x16 32x32 64x64" href="{{ asset('assets/faviconit/favicon.ico') }}">
    <link rel="icon" type="image/png" sizes="196x196" href="{{ asset('assets/faviconit/favicon-192.png') }}">
    <link rel="icon" type="image/png" sizes="160x160" href="{{ asset('assets/faviconit/favicon-160.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('assets/faviconit/favicon-96.png') }}">
    <link rel="icon" type="image/png" sizes="64x64" href="{{ asset('assets/faviconit/favicon-64.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/faviconit/favicon-32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/faviconit/favicon-16.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('assets/faviconit/favicon-57.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('assets/faviconit/favicon-114.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('assets/faviconit/favicon-72.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/faviconit/favicon-144.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('assets/faviconit/favicon-60.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/faviconit/favicon-120.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/faviconit/favicon-76.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/faviconit/favicon-152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/faviconit/favicon-180.png') }}">
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="{{ asset('assets/faviconit/favicon-144.png') }}">
    <meta name="msapplication-config" content="{{ asset('assets/faviconit/browserconfig.xml') }}">

    <meta name="theme-color" content="#4285f4">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/appCourse/app.css') }}">

</head>

<body class="font-sans antialiased">
    <div id="root"></div>
    <!-- Scripts -->
    <script type="text/javascript" src="{{ mix('js/appCourse/app.js') }}" defer></script>
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
