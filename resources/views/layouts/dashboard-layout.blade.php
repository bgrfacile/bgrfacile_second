<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'bgrfacile') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('/css/appDashboard.css') }}" rel="stylesheet" />

    <!-- Scripts -->
    <script src="{{ mix('/js/appDashboard.js') }}" defer></script>
</head>

<body class="font-sans antialiased">
    @yield('content')
</body>

</html>
