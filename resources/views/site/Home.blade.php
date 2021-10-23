<x-site-layout>

    <x-slot name="header">
        <header class="bg-transparent dark:bg-gray-900 bg-cover bg-center bg-no-repeat headline"
            style="background-image: url(https://demo.gethugothemes.com/northendlab-light/images/banner/banner-bg.svg)">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row ">
                <div class="flex flex-col justify-center px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-4xl text-gray-800 leading-normal">
                        {{ __('Un apprentissage de marque et un pont vers la connaissance.') }}
                    </h2>

                    <p class="mt-2 text-sm text-gray-500 md:text-base">
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center lg:justify-start mt-6">
                        <a class="btn btn-primary px-4 py-3 font-semibold" href="#">Lizer votre premier cours</a>
                        <div class="relative mt-2 sm:mt-0" x-data="{ open: false }" @click.away="open = false"
                            @close.stop="open = false">
                            <a @click="open =! open"
                                class="btn btn-outline w-full sm:w-max sm:mx-4 px-4 py-3 font-semibold text-black border-0"
                                style="background-color: #ebecf0" href="#">
                                Explorer
                                <x-svg-chevron class="ml-1" />
                            </a>
                            <div x-show="open" x-transition:enter="transition ease-out duration-200"
                                x-transition:enter-start="transform opacity-0 scale-95"
                                x-transition:enter-end="transform opacity-100 scale-100"
                                x-transition:leave="transition ease-in duration-75"
                                x-transition:leave-start="transform opacity-100 scale-100"
                                x-transition:leave-end="transform opacity-0 scale-95" style="display: none;"
                                @click="open = false" class="absolute z-10 ml-4 mt-2">
                                <div
                                    class="bg-white p-4 text-gray-500 dark:bg-gray-700 rounded-lg grid grid-rows-4 shadow-lg overflow-hidden w-full">
                                    <a href="#"
                                        class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                        <x-svg-book-open class="mr-1 h-5 w-5" />
                                        <span class="text-base font-medium">Cours</span>
                                    </a>
                                    <a href="#"
                                        class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                        <x-svg-exo class="mr-1 h-5 w-5" />
                                        <span class="text-base font-medium">Exercices</span>
                                    </a>
                                    <a href="#"
                                        class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                        <x-svg-formation class="mr-1 h-5 w-5" />
                                        <span class="text-base font-medium">Formations</span>
                                    </a>
                                    <a href="#"
                                        class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                        <x-svg-bonus class="mr-1 h-5 w-5" />
                                        <span class="text-base font-medium">Bonus</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class="swiper w-full h-80 md:max-w-lg overflow-hidden rounded-lg bg-transparent">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="w-full h-full object-cover" src="{{ asset('img/étudiant_revise.webp') }}"
                                    alt="étudiant entrain lire">

                            </div>
                            <div class="swiper-slide">
                                <x-svg-school class="w-full h-full object-cover" />
                            </div>
                            <div class="swiper-slide"> <img class="w-full max-h-full object-cover"
                                    src="{{ asset('img/eleve_etudie.webp') }}" alt="étudiants qui étudient">
                            </div>
                        </div>
                        {{-- <div class="swiper-pagination"></div> --}}
                        {{-- <div id="button-prev" class="swiper-button-prev"></div> --}}
                        {{-- <div id="button-next" class="swiper-button-next"></div> --}}
                        {{-- <div class="swiper-scrollbar"></div> --}}
                    </div>
                </div>
        </header>
    </x-slot>

    <div class="py-12 headline">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white dark:bg-gray-800">
                    <div class="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

                        <x-count-model name="Cours" count="7000">
                            <x-slot name="svg">
                                <x-svg-book-open class="block h-8 w-auto text-gray-600" />
                            </x-slot>
                        </x-count-model>

                        <x-count-model name="Exercices" count="5000">
                            <x-slot name="svg">
                                <x-svg-exo class="block h-8 w-auto text-gray-600" />
                            </x-slot>
                        </x-count-model>


                        <x-count-model name="Formations" count="200">
                            <x-slot name="svg">
                                <x-svg-formation class="block h-8 w-auto text-gray-600" />
                            </x-slot>
                        </x-count-model>

                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="py-12 headline">

        <div class="max-w-7xl flex flex-col mx-auto sm:px-6 lg:px-8 relative">
            <h3 class="text-4xl font-bold dark:text-gray-200 px-4 sm:px-0">Acteurs du site</h3>
            <div class="mt-8">
                <div class="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div
                        class="flex flex-col justify-center items-center w-full h-full bg-white dark:bg-gray-900 dark:text-gray-400 p-9 overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div class="h-28 w-28 rounded-full bg-transparent">
                            <img class="w-full h-full object-cover rounded-full" src="{{ asset('img/student.webp') }}"
                                alt="">
                        </div>
                        <h4 class="text-2xl font-semibold mt-2">Apprenants</h4>
                        <p class="flex-1 mt-2">
                            élèves, étudiants ou autodidacte, <strong class="font-semibold">bgrfacile</strong>
                            vous
                            offre la possibilité
                            de vous formez et de vous exercez dans le domaine de votre choix
                        </p>
                    </div>
                    <div
                        class="flex flex-col justify-center items-center w-full h-full bg-white dark:bg-gray-900 dark:text-gray-400 p-9 overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div class="h-28 w-28 rounded-full bg-transparent">
                            <img class="w-full h-full object-cover rounded-full"
                                src="{{ asset('img/professor.webp') }}" alt="">
                        </div>
                        <h4 class="text-2xl font-semibold mt-2">Formateurs</h4>
                        <p class="flex-1 mt-2">
                            Tous utilisateurs ayant le besion de partager ces connaissances, <strong
                                class="font-semibold">bgrfacile</strong> vous offres
                            la possibilité de crée du contenue et de le publier.
                            Une rénumération pouvant être perçu par ceux-ci.
                        </p>
                    </div>
                    <div
                        class="flex flex-col justify-center items-center w-full h-full bg-white dark:bg-gray-900 dark:text-gray-400 p-9 overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div class="h-28 w-28 rounded-full bg-transparent">
                            <img class="w-full h-full object-cover rounded-full" src="{{ asset('img/school.webp') }}"
                                alt="">
                        </div>
                        <h4 class="text-2xl font-semibold mt-2">écoles</h4>
                        <p class="flex-1 mt-2">
                            <strong class="font-semibold">bgrfacile</strong> offre la possibilité aux écoles de
                            s’enregistrer et de profiter des
                            fonctionnalités intéressante pour eux.
                        </p>
                        <button class="btn btn-primary mt-10">En savoir plus</button>
                    </div>
                </div>
            </div>
            {{-- <x-svg-dots class="block h-80 w-80 absolute top-0" /> --}}
            {{-- <x-svg-dots class="block h-80 w-80 absolute bottom-0 right-0" /> --}}
        </div>

    </div>

    <div class="py-12 headline">
        <div class="max-w-7xl min-h-full mx-auto sm:px-6 lg:px-8">
            <div class="p-6 flex flex-col md:flex-row relative">
                <div class="h-auto w-full">
                    <div class="swiper w-full h-80 md:max-w-lg overflow-hidden rounded-lg bg-transparent">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="w-full h-full object-cover" src="{{ asset('img/étudiant_revise.webp') }}"
                                    alt="étudiant entrain lire">
                            </div>
                            <div class="swiper-slide">
                                <x-svg-school class="w-full h-full object-cover" />
                            </div>
                            <div class="swiper-slide">
                                <img class="w-full max-h-full object-cover" src="{{ asset('img/eleve_etudie.webp') }}"
                                    alt="étudiants qui étudient">
                            </div>
                        </div>
                        {{-- <div class="swiper-pagination"></div> --}}
                        {{-- <div id="button-prev" class="swiper-button-prev"></div> --}}
                        {{-- <div id="button-next" class="swiper-button-next"></div> --}}
                        {{-- <div class="swiper-scrollbar"></div> --}}
                    </div>
                </div>
                <div class="h-96 w-full flex flex-col justify-center items-center">
                    <div class="p-4 mt-3 md:mt-0">
                        <h4 class="text-2xl font-semibold mt-2 dark:text-gray-200">Le contenue proposé</h4>
                        <p class="mt-2 text-gray-800 dark:text-gray-400">
                            Retrouver un ensemble struturé de cours scolaire alant du primaire collège au cours
                            donné en
                            étude supérieur, mais pas que vous retrouver aussi des cours non classé mais tout aussi
                            utile comme les languages de programmation (Ex: html,css, etc.)
                            Des formations aussi sont proposé
                        </p>
                    </div>
                </div>
                <div class="h-80 w-80 absolute" style="top: -91px;left: -88px;">
                    <x-svg-dots class="h-full w-full" />
                </div>
            </div>
        </div>
    </div>


    <div class="pt-12 headline">
        <div class="max-w-7xl min-h-full mx-auto sm:px-6 lg:px-8">
            <div class="p-6 flex flex-col md:flex-row relative">
                <div class="h-96 w-full flex justify-center items-center">
                    <div>
                        <h4 class="text-2xl font-semibold mt-2 dark:text-gray-200">Podcast de bgrfacile</h4>
                        <p class="mt-2 text-gray-800 dark:text-gray-400">
                            Ils et elles ont donné leur voix pour la lecture des oeuvres populaires africaines.
                            Retrouvez ici un ensemble de piste audios entierement gratuit relatant l’ensemble des
                            livres
                            de notre collèction.
                        </p>
                        <div class="mt-2">
                            <button class="btn btn-primary font-semibold dark:bg-gray-900">Je veux
                                contribuer</button>
                        </div>
                    </div>
                </div>
                <div class="md:py-2 h-auto md:h-96 w-full overflow-hidden flex justify-center items-center">
                    <div
                        class="w-full h-80 flex justify-center items-center md:max-w-lg overflow-hidden rounded-lg bg-transparent">
                        <div class="player">
                            <div id="info" class="info">
                                <span class="artist">Stella victoire</span>
                                <span class="name">Chronique Congolaise</span>
                                <div class="progress-bar">
                                    <div class="bar"></div>
                                </div>
                            </div>
                            <div id="control-panel" class="control-panel">
                                <div class="album-art"></div>
                                <div class="controls">
                                    <div class="prev"></div>
                                    <div id="play" class="play"></div>
                                    <div class="next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-80 w-80 absolute" style="top: -91px;left: -88px;">
                    <x-svg-dots class="h-full w-full" />
                </div>
            </div>
        </div>
    </div>

    <div class="py-12 headline">
        <div class="max-w-7xl min-h-full mx-auto sm:px-6 lg:px-8">
            <div class="p-6 flex flex-col md:flex-row">
                <div class="h-96 w-full flex justify-center items-center">
                    <div
                        class="w-9/12 h-5/6 sm:w-full sm:h-full flex justify-center items-center  md:h-80 md:max-w-lg overflow-hidden rounded-lg bg-transparent">
                        <x-svg-app-dev class="h-full w-full" />
                    </div>
                </div>
                <div class="h-96 w-full flex justify-center items-center">
                    <div class="flex flex-col">
                        <h4 class="text-2xl font-semibold mt-2 dark:text-gray-200">Une Application pour les <br>
                            <strong class="text-6xl text-blue-600">Apprenants</strong>
                        </h4>
                        <p class="mt-2 text-gray-800 dark:text-gray-400">
                            Bgfacile met à disposition des apprenants une application mobile idéal pour visiter
                            l'ensemble des contenus du site avec des interfaces simples et intuitives. <br>
                            L'application est disponible sur le PlayStore.
                        <div class="mt-2 flex">
                            <a href="https://play.google.com/store/apps/details?id=com.bgrfacile.bgrfacile&hl=fr&gl=US"
                                target="_blank">
                                <div
                                    class="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                                    <div class="mr-3">
                                        <x-svg-playstore class="w-8" />
                                    </div>
                                    <div>
                                        <div class="text-xs">OBTENEZ-LE SUR</div>
                                        <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="py-12 headline">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white dark:bg-gray-800 ">
                    <div class="flex flex-col">
                        <div class="h-40 w-full relative">
                            <canvas class="h-full w-full object-cover block mx-auto" id="c"></canvas>
                            <h4 class="text-6xl font-semibold text-white text-center absolute"
                                style="top: 40%;left: 50%;transform: translate(-50%,50%)">
                                Faire un don
                            </h4>
                        </div>
                        <div class="p-9 mt-16 flex flex-col justify-center items-center" id="wrapper-svg">
                            <div class="wrapper-svg flex-1 text-center">
                                <x-svg-plant class="mx-auto w-14 h-14" id="svg-plant" />
                                <h5 class="mt-2 text-2xl font-semibold dark:text-gray-200">Soutenez le site</h5>
                                <p class="my-5 dark:text-gray-400">
                                    Chaque don fait au site aider à le maintenir et l'améliorer
                                </p>
                                <div class="donate-link">
                                    <a href="#" class="btn-paypal" target="_blank" style="margin-bottom: 10px">
                                        <i class="fa fa-lock donate-padlock-icon"></i> <span>Faire un don</span>
                                    </a>
                                    <img src="{{ asset('assets/donation.webp') }}" class="donate-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</x-site-layout>
