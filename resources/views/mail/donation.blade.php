<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml" lang="fr">

<head>
    <meta property="og:title" content="Email template">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bgrfacile</title>
    <link rel="stylesheet" href="{{ asset('css/appSite/app.css') }}">
</head>

<body>
    <div class="w-6/12 mx-auto p-4 flex flex-col bg-white rounded-r-3xl">
        <h1 class="font-bold text-2xl">Ce mail vient d'un donateur de l'application bgrfacile</h1>
        <ul class="flex flex-col mt-8 text-gray-500 leading-7 tracking-wider">
            <li class="mb-2 border-b-2">
                <span class="font-bold">Pseudo : </span>
                <span class="ml-2 italic">{{ $data['pseudo'] }}</span>
            </li>
            <li class="mb-2 border-b-2">
                <span class="font-bold">Email : </span>
                <span class="ml-2 italic">{{ $data['email'] }}</span>
            </li>
            <li class="mb-2 border-b-2">
                <span class="font-bold">Télephone : </span>
                <span class="ml-2 italic">{{ $data['telephone'] }}</span>
            </li>
            <li class="mb-2 border-b-2">
                <span class="font-bold">Méssage : </span>
                <span class="ml-2 italic">{{ $data['message'] }}</span>
            </li>
        </ul>
    </div>
</body>

</html>
