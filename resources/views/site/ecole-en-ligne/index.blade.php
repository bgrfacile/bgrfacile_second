<x-site-layout>
    <x-slot name="header">

    </x-slot>
    <div class="max-w-7xl py-6 mx-auto px-1 sm:px-6 lg:px-8">

        <div class="bg-gray-100">
            <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        Retrouvez plus de {{ $countSchools }}
                        <span class="text-indigo-700">école en ligne </span>
                        avec bgrfacile
                    </h1>
                    <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                        vous pouvez ajouter votre établissement en ligne et vous connecter gratuitement.
                        Tout en profitant de nos services et de nos offres.
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-white text-sm lg:text-xl lg:font-bold  rounded text-white hover:text-gray-700 px-4 sm:px-10 border border-indigo-700 hover:border-gray-700 py-2 sm:py-4 transition ease-in-out">
                        s'enregister</button>
                    <button
                        class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-white hover:bg-indigo-700 hover:border-indigo-600 text-sm lg:text-xl  lg:font-bold  hover:text-white rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 transition ease-in-out">
                        se connecter</button>
                </div>
            </div>
        </div>
    </div>
    {{-- <section>
            <div class=" lg:py-12 lg:flex lg:justify-center">
                <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div class="lg:w-1/2">
                        <div class="h-64 bg-cover lg:rounded-lg lg:h-full"
                            style="background-image:url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')">
                        </div>
                    </div>
                    <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 class="text-3xl text-gray-800 font-bold">
                            retrouver une <span class="text-indigo-600">école</span>
                            sur bgrfacile</h2>
                        <p class="mt-4 text-gray-600">
                            Il est très simple pour un utilisateur de bgrfacile de retrouver une école dans le
                            réseau de l'établissement scolaire.<br>
                            il suffit de saisir le nom de l'école dans le champ de recherche et de cliquer sur
                            le bouton rechercher. <br>
                            Vous pouvez aussi rechercher par ville ou par type d'école.
                        </p>

                    </div>
                </div>
            </div>
        </section> --}}

    <section class="w-10/12 m-auto py-8 flex flex-col">
        <div class="flex justify-start items-center gap-8">
            <div class="rounded-full bg-amber-100 w-80 shadow-xl">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1syc3eqp.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-8/12">
                <h3 class="text-2xl font-bold">Retrouver son école</h3>
                <p class="text-xl py-4">
                    Il est très simple pour nos visiteurs de retrouver une école dans notre réseau d'établissements
                    scolaires.il suffit de faire une recherche avec le nom de l'établissement et servez-vous des
                    filtres.
                </p>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-start items-center gap-8">
            <div class="rounded-full bg-green-100 w-80 shadow-xl">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vmmezcyz.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-8/12">
                <h3 class="text-2xl font-bold">Se Connecter à son école</h3>
                <p class="text-xl py-4">
                    Chaque apprenant peut se connecter gratuitement à son école en ligne.
                    Il suffit de cliquer sur le bouton se connecter présent sur chaque école et de remplir les champs
                    demandés.
                </p>
            </div>
        </div>
        <div class="flex justify-start items-center gap-8">
            <div class="rounded-full bg-pink-100 w-80 shadow-xl">
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9zhayktd.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-8/12">
                <h3 class="text-2xl font-bold">Interagir avec son école</h3>
                <p class="text-xl py-4">
                    Une fois connecté, vous pouvez consulter: les informations de votre école, les évènements, les
                    supports de cours et examens, l'emploi du temps, les dates d'évaluations, les evaluations,les
                    relévés
                    de notes, les mails...
                </p>
            </div>
        </div>
    </section>

    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2
                    class="mt-2 text-lg md:text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                    Fonctionnalités offertes pour les écoles en ligne
                </h2>
                <p class="mt-4 max-w-2xl text-base md:text-xl text-gray-500 lg:mx-auto">
                    Plusieurs fonctionnalités liées à la gestion de l'école en ligne sont disponibles pour les
                    écoles en ligne.
                </p>
            </div>

            <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/globe-alt -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des élèves
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des élèves.
                        </dd>
                    </div>

                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/scale -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des professeurs
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des professeurs.
                        </dd>
                    </div>

                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/lightning-bolt -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des évènements
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des évènements.
                        </dd>
                    </div>

                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/annotation -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des matières
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des matières.
                        </dd>
                    </div>

                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/annotation -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des classes
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des classes.
                        </dd>
                    </div>

                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/annotation -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des groupes
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des groupes.
                        </dd>
                    </div>

                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/annotation -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des bulletins
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des bulletins.
                        </dd>
                    </div>


                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <!-- Heroicon name: outline/annotation -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                Gestion des notes
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            Vous pouvez ajouter, modifier, supprimer des notes.
                            avec la possibilité de gérer les notes des élèves.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>

    <section class="max-w-5xl mx-auto py-10">
        <div>
            <h2 class="text-3xl md:text-5xl text-center font-bold text-blue-600 mb-2 md:mb-4">
                Comment créer votre école en ligne ?
            </h2>
            <div class="flex flex-row">
                <div class="hidden md:flex flex-col items-center">
                    <div
                        class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                        <div class="text-3xl font-black text-gray-500">Etape 1</div>
                        <div class="text-gray-500 text-sm text-center">Compte utilisateur</div>
                    </div>
                    <div class="h-full border-l-4 border-transparent">
                        <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Etape 1</span> - Compte utilisateur</div>
                            <div class="p-3 text-3xl text-gray-800 font"> Créer votre compte sur bgrfacile </div>
                            <div class="px-3 pb-6">
                                Vous devez créer un compte pour pouvoir accéder à toutes les fonctionnalités de
                                bgrfacile.
                            </div>
                        </div>
                        <div class="md:w-96 w-full p-5">
                            <img src="{{ asset('assets/img/undraw_create_re_57a3.svg') }}" alt="step 1"
                                class="object-scale-down">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-start flex-row">
                <div class="border-t-4 border-r-4 border-transparent">
                    <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full">
                    </div>
                </div>
                <div class="border-t-4 border-transparent flex-auto">
                    <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
                </div>
                <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full">
                </div>
            </div>
            <div class="flex flex-row-reverse">
                <div class="hidden md:flex flex-col items-center">
                    <div
                        class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                        <div class="text-3xl font-black text-gray-500">Step 2</div>
                        <div class="text-gray-500 text-sm">Collaboration</div>
                    </div>
                    <div class="h-full border-r-4 border-transparent">
                        <div class="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Step 2</span> - Collaboration</div>
                            <div class="p-3 text-3xl text-gray-800 font">Find your team and collaborate</div>
                            <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt
                                labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil
                                ipsum.</div>
                        </div>
                        <div class="md:w-96 w-full p-5"><img
                                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 2"
                                class="object-scale-down"></div>
                    </div>
                </div>
            </div>
            <div class="flex items-start flex-row-reverse">
                <div class="border-t-4 border-l-4 border-transparent">
                    <div class="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full">
                    </div>
                </div>
                <div class="border-t-4 border-transparent flex-auto">
                    <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
                </div>
                <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full">
                </div>
            </div>
            <div class="flex flex-row">
                <div class="hidden md:flex flex-col items-center">
                    <div
                        class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                        <div class="text-3xl font-black text-gray-500">Step 3</div>
                        <div class="text-gray-500 text-sm">Planification</div>
                    </div>
                    <div class="h-full border-l-4 border-transparent">
                        <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Step 3</span> - Planification</div>
                            <div class="p-3 text-3xl text-gray-800 font">Make a good plan and prepare tasks</div>
                            <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt
                                labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil
                                ipsum.</div>
                        </div>
                        <div class="md:w-96 w-full p-5"><img
                                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 3"
                                class="object-scale-down"></div>
                    </div>
                </div>
            </div>
            <div class="flex items-start flex-row">
                <div class="border-t-4 border-r-4 border-transparent">
                    <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full">
                    </div>
                </div>
                <div class="border-t-4 border-transparent flex-auto">
                    <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
                </div>
                <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full">
                </div>
            </div>
            <div class="flex flex-row-reverse">
                <div class="hidden md:flex flex-col items-center">
                    <div
                        class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                        <div class="text-3xl font-black text-gray-500">Step 4</div>
                        <div class="text-gray-500 text-sm">Implementation</div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Step 4</span> - Implementation</div>
                            <div class="p-3 text-3xl text-gray-800 font">Execute, impletement your solution</div>
                            <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt
                                labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil
                                ipsum.</div>
                        </div>
                        <div class="md:w-96 w-full p-5"><img
                                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 4"
                                class="object-scale-down"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full pt-16 pb-20 ">
        <div class="px-10 mx-auto text-center max-w-7xl">
            <h2 class="text-5xl font-bold text-blue-600">
                Choisissez votre plan
            </h2>
            <p class="mt-3 text-lg text-gray-500">Vous aurez la possibilté de modifier si besion</p>
            <div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">

                <!-- Start First Plan -->
                <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">

                    <div
                        class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-green-50 rounded-2xl">
                    </div>
                    <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                    <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                        <svg class="w-16 h-16 text-green-400 rounded-2xl" viewBox="0 0 150 150"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <rect x="0" y="0" width="150" height="150" rx="15"></rect>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <mask fill="#fff">
                                    <use xlink:href="#plan1"></use>
                                </mask>
                                <use fill="currentColor" xlink:href="#plan1"></use>
                                <circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50">
                                </circle>
                                <path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z">
                                </path>
                            </g>
                        </svg>
                        <div class="relative flex flex-col items-start">
                            <h3 class="text-xl font-bold">Basic Plan</h3>
                            <p class="tracking-tight text-gray-500">
                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                <span class="text-3xl font-bold text-gray-800">10</span>
                                <span class="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                            </p>
                        </div>
                    </div>

                    <ul class="relative py-12 space-y-3">
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Custom Design &amp; Features</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Access to 100+ Components</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Priority Email Support</span>
                        </li>
                    </ul>

                    <a href="#_"
                        class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                        <span
                            class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
                        <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                        <span class="relative">Choose Plan</span>
                        <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>

                </div>
                <!-- End First Plan -->

                <!-- Start Middle Plan -->
                <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl">

                    <div
                        class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-2xl">
                    </div>
                    <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                    <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                        <svg class="w-16 h-16 text-indigo-400 rounded-2xl" viewBox="0 0 150 150"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <rect x="0" y="0" width="150" height="150" rx="15"></rect>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <mask fill="#fff">
                                    <use xlink:href="#plan1"></use>
                                </mask>
                                <use fill="currentColor" xlink:href="#plan1"></use>
                                <circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50">
                                </circle>
                                <path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z">
                                </path>
                            </g>
                        </svg>
                        <div class="relative flex flex-col items-start">
                            <h3 class="text-xl font-bold">Professional Plan</h3>
                            <p class="tracking-tight text-gray-500">
                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                <span class="text-3xl font-bold text-gray-800">25</span>
                                <span class="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                            </p>
                        </div>
                    </div>

                    <ul class="relative py-12 space-y-3">
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Dedicated Design Team</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Custom Design &amp; Features</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Access to 200+ Components</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Priority Email &amp; Chat Support</span>
                        </li>
                    </ul>

                    <a href="#_"
                        class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                        <span
                            class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                        <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                        <span class="relative">Choose Plan</span>
                        <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>

                </div>
                <!-- End Middle Plan -->

                <!-- Start Third Plan -->
                <div
                    class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl md:col-span-2 lg:col-span-1">

                    <div
                        class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-red-50 rounded-2xl">
                    </div>
                    <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                    <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                        <svg class="w-16 h-16 text-red-400 rounded-2xl" viewBox="0 0 150 150"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <rect x="0" y="0" width="150" height="150" rx="15"></rect>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <mask fill="#fff">
                                    <use xlink:href="#plan1"></use>
                                </mask>
                                <use fill="currentColor" xlink:href="#plan1"></use>
                                <circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50">
                                </circle>
                                <path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z">
                                </path>
                            </g>
                        </svg>
                        <div class="relative flex flex-col items-start">
                            <h3 class="text-xl font-bold">Enterprise Plan</h3>
                            <p class="tracking-tight text-gray-500">
                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                <span class="text-3xl font-bold text-gray-800">35</span>
                                <span class="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                            </p>
                        </div>
                    </div>

                    <ul class="relative py-12 space-y-3">
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Dedicated Design &amp; Dev Team</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Custom Design &amp; Features</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Access to 500+ Components</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Priority Phone Support</span>
                        </li>
                    </ul>

                    <a href="#_"
                        class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                        <span
                            class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-red-400"></span>
                        <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                        <span class="relative">Choose Plan</span>
                        <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>

                </div>
                <!-- End Third Plan -->

            </div>
        </div>
    </section>


    <section class="relative bg-white overflow-hidden">
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                <div class="sm:max-w-lg">
                    <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Summer styles
                        are finally here</h1>
                    <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you
                        from the harsh elements of a world that doesn't care if you live or die.</p>
                </div>
                <div>
                    <div class="mt-10">
                        <!-- Decorative image grid -->
                        <div aria-hidden="true"
                            class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                            <div
                                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div class="flex items-center space-x-6 lg:space-x-8">
                                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#"
                            class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                            Shop Collection</a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <div class="w-full py-24 mx-auto flex items-center justify-center bg-black">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full">
                <h2 class="w-full md:w-2/3 text-3xl md:text-7xl font-bold mb-4">
                    Soucrire à la newsletter
                </h2>
                <p class="text-base">
                    Notre newsletter vous informe des nouveautés et des promotions.
                </p>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <input
                    class=" border-white border-2  text-base w-full font-medium leading-none text-gray-50 p-4 focus:outline-none bg-transparent placeholder-white"
                    placeholder="Email Address" />
                <button
                    class="focus:outline-none focus:ring-offset-2 focus:ring border border-white text-gray-50 bg-transparent hover:bg-blue-600 py-4 px-6 hover:bg-opacity-75 transition-colors duration-75 ease-linear">
                    Souscrire
                </button>
            </div>
        </div>
    </div>
    {{-- </div> --}}
</x-site-layout>
