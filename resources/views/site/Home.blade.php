{{-- style="background-image: url(https://demo.gethugothemes.com/northendlab-light/images/banner/banner-bg.svg)"> --}}
<x-site-layout>

    <x-slot name="header">
    </x-slot>
    <header
        class="h-full md:h-[calc(100vh-80px)] w-full flex flex-col md:flex-row items-center justify-center bg-transparent dark:bg-gray-900 bg-cover bg-center bg-no-repeat"
        style="background-color: #f5fcff;background-image: url({{ asset('assets/img/bg-header-homePage.svg') }})">
        <div style="height: inherit"
            class="relative w-full md:max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
            <div class="flex flex-col w-full h-full justify-center pt-10 md:pt-0 px-4 mb-4 md:mb-0">
                <h2 class="font-semibold text-3xl md:text-4xl text-gray-800 leading-normal">
                    {{ __('Un apprentissage de marque et un pont vers la connaissance.') }}
                </h2>

                <p class="mt-2 text-sm text-gray-500 md:text-base">
                    Plus de 1000 cours certifiés répartis en plus de 50 matières à votre disposition.
                </p>
                <div class="flex flex-col md:flex-row justify-start mt-6">
                    <a class="w-full md:w-max bg-blue-600 text-gray-100 hover:text-white hover:bg-blue-900 rounded-2xl px-4 py-3 font-semibold"
                        href="{{ route('randomCours.page') }}">Lire son premier cours</a>
                    <div class="relative mt-2 sm:mt-0" x-data="{ open: false }" @click.away="open = false"
                        @close.stop="open = false">
                        <a @click="open =! open"
                            class="bg-gray-200 text-gray-700 w-full flex justify-between items-center rounded-2xl mx-0 md:mx-4 mt-2 md:mt-0 px-4 py-3 font-semibold  border-0"
                            href="#">
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
                                <a href="{{ route('cours.page') }}"
                                    class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                    <x-svg-book-open class="mr-1 h-5 w-5" />
                                    <span class="text-base font-medium">Cours</span>
                                </a>
                                <a href="{{ route('exercices.page') }}"
                                    class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                    <x-svg-exo class="mr-1 h-5 w-5" />
                                    <span class="text-base font-medium">Exercices</span>
                                </a>
                                <a href="{{ route('formation.page') }}"
                                    class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                    <x-svg-formation class="mr-1 h-5 w-5" />
                                    <span class="text-base font-medium">Formations</span>
                                </a>
                                <a href="{{ route('bonus.page') }}"
                                    class="rounded-lg flex items-center dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-3">
                                    <x-svg-bonus class="mr-1 h-5 w-5" />
                                    <span class="text-base font-medium">Bonus</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full h-full justify-center items-center">
                <img class="w-full h-full object-cover overflow-hidden" src="{{ asset('assets/img/H01.png') }}"
                    alt="étudiant entrain lire">
            </div>
        </div>
    </header>

    <section class="h-80 bg-blue-300 flex items-center">
        <div class="w-10/12 mx-auto py-8 flex items-center">
            <img src="public/images/Graph.svg" alt="" class="object-contain">
            <div
                class="w-full h-min py-6 md:py-0 px-2 sm:px-0 md:h-32 flex flex-col justify-center items-center bg-white rounded-3xl shadow-lg">
                <div class="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

                    <x-count-model name="Cours" count="{{ $countCours }}">
                        <x-slot name="svg">
                            <x-svg-book-open class="block h-8 w-auto text-gray-600" />
                        </x-slot>
                    </x-count-model>

                    <x-count-model name="Exercices" count="{{ $countExercices }}">
                        <x-slot name="svg">
                            <x-svg-exo class="block h-8 w-auto text-gray-600" />
                        </x-slot>
                    </x-count-model>


                    <x-count-model name="Formations" count="{{ $countSolutions }}">
                        <x-slot name="svg">
                            <x-svg-formation class="block h-8 w-auto text-gray-600" />
                        </x-slot>
                    </x-count-model>

                </div>
            </div>
        </div>
    </section>



    <section class="py-10 text-gray-700">
        <div class="w-10/12 m-auto h-fit">
            <h2 class="text-4xl sm:text-6xl font-bold text-center my-8 text-gray-700 uppercase">à qui s'addresse ce
                site?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                <div class="h-full bg-white rounded-md p-5 shadow-xl">
                    <img src="{{ asset('assets/img/undraw_online_learning_re_qw08.svg') }}"
                        alt="illustration de d'un apprenant qui lit un cours" class="h-fit w-fit object-cover">
                    <h2 class="my-8 font-bold text-lg md:text-2xl">Apprenants</h2>
                    <p class="">
                        Les élèves,les étudiants et les autodidactes, <strong class="font-semibold">bgrfacile</strong>
                        vous
                        offre la possibilité
                        de vous former et de vous exercer dans le domaine de votre choix.</p>
                    {{-- <a href="{{ route('donation.page') }}" class="btn-paypal my-2" target="_blank"
                        style="margin-bottom: 10px">
                        <i class="fa fa-lock donate-padlock-icon"></i> <span>Comment ça marche ?</span>
                    </a> --}}
                </div>
                <div class="h-full bg-neutral-700 text-gray-200  rounded-md p-5 shadow-xl">
                    <img src="{{ asset('assets/img/undraw_podcast_re_wr88.svg') }}"
                        alt="illustration de formateur qui enregistre un cour" class="h-fit w-fit object-cover">
                    <h2 class="my-8 font-bold text-lg md:text-2xl">Formateurs</h2>
                    <p class="">
                        Toute personne compétente et capable de partager ses connaissances, via le site.<br>
                        <strong class="font-semibold">Bgrfacile</strong> vous
                        offre donc la possibilité de créer et de publier des cours.<br>
                        Les formateurs pourront bénécifier d'une rémunération.
                    </p>
                </div>
                <div class="h-full bg-white rounded-md p-5 shadow-xl" shadow-lg>
                    <img src="{{ asset('assets/img/undraw_preferences_popup_re_4qk0.svg') }}"
                        alt="illustration de personne qui enregister une école" class="h-fit w-fit object-cover">
                    <h2 class="my-8 font-bold text-lg md:text-2xl">Ecoles en ligne</h2>
                    <p class="">
                        Vous êtes un établisement, un institut, un groupe scolaire, ou école supérieure ?
                        <strong class="font-semibold">bgrfacile</strong> vous
                        offre la possibilité d'être
                        plus visible et d'exixter sur internet.<br>
                        Vous aurez à votre disposition un espace numérique permettant
                        à chaque établissement d'échanger du contenue avec leurs élèves.<br>
                        Il suffit juste de vous faire enregistrer afin de profiter des avantages et des differentes
                        fonctionnalités de nos services.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <div class="relative bg-transparent overflow-hidden">
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                <div class="sm:max-w-lg">
                    <h4
                        class="text-4xl sm:text-6xl font font-extrabold tracking-tight text-gray-900  dark:text-gray-200">
                        A propos du contenu
                    </h4>
                    <p class="mt-4 text-xl text-gray-500">
                        Retrouver un ensemble struturé de cours de differents niveaux scolaire, disponible en differents
                        format
                        dont <strong>pdf</strong>, <strong>video</strong>, <strong>audio</strong> et
                        <strong>image</strong>.<br>
                        Mais aussi vous retrouver des cours non classé mais tout aussi indispensable comme
                        l'apprentisage des
                        languages de programmation (Ex: html,css, etc.) dans une interface simple et intuitive.
                    </p>
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
                                            <img src="{{ asset('assets/img/undraw_online_learning_re_qw08.svg') }}"
                                                alt="" class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="{{ asset('assets/img/music.svg') }}" alt=""
                                                class="w-full h-full object-center object-cover">
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="{{ asset('assets/img/videographe.svg') }}" alt=""
                                                class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="{{ asset('assets/img/recording.svg') }}" alt=""
                                                class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="{{ asset('assets/img/optimize_image.svg') }}" alt=""
                                                class="w-full h-full object-center object-cover">
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="{{ asset('assets/img/video_files.svg') }}" alt=""
                                                class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                                            <img src="{{ asset('assets/img/questions.svg') }}" alt=""
                                                class="w-full h-full object-center object-cover">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{-- <a href="#"
                            class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                            En savoir plus
                        </a> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="pt-12 headline">
        <div class="max-w-7xl min-h-full mx-auto sm:px-6 lg:px-8">
            <div class="p-6 h-auto md:h-96 flex flex-col md:flex-row relative">
                <div class="h-auto w-full flex justify-center items-center mb-6 md:mb-0">
                    <div>
                        <h4
                            class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-200">
                            Bonus de bgrfacile</h4>
                        <p class="mt-3 text-gray-800 dark:text-gray-400">
                            Des Quizs, des podcasts et des jeux pour vous aidez à mieux comprendre les
                            cours et vous divertir.
                        </p>
                        {{-- <div class="mt-4 mx-auto">
                            <div id="player_home">
                                <div class="player">
                                    <div id="info" class="info">
                                        <span class="artist"> </span>
                                        <span class="name">l'étranger de Albert Camus</span>
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
                        </div> --}}
                    </div>
                </div>
                <div class="h-full md:h-auto w-full overflow-hidden flex justify-center items-center">
                    <div class="swiper flex items-center justify-center w-full">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="w-full h-full rounded object-cover"
                                    src="{{ asset('assets/img/étudiant_revise.webp') }}" alt="étudiant entrain lire">
                            </div>
                            <div class="swiper-slide">
                                <x-svg-school class="w-full h-full rounded object-cover" />
                            </div>
                            <div class="swiper-slide">
                                <img class="w-full max-h-full rounded object-cover"
                                    src="{{ asset('assets/img/eleve_etudie.webp') }}" alt="étudiants qui étudient">
                            </div>
                        </div>
                    </div>
                    {{-- <iframe src="https://embed.lottiefiles.com/animation/68889"></iframe> --}}
                </div>
                <div class="h-8 md:80 w-8 md:w-80 absolute -z-10" style="top: -91px;left: -88px;">
                    <x-svg-dots class="h-full w-full" />
                </div>
            </div>
        </div>
    </section>

    <section class="pt-1 pb-12 md:py-12 headline">
        <div class="w-full md:max-w-7xl mx-auto px-4 lg:px-8">
            <div class="flex items-center flex-col md:flex-row">
                <div class="w-full h-full flex justify-center items-center overflow-hidden bg-transparent">
                    <x-svg-app-dev class="h-96 w-full object-cover" />
                </div>
                <div class="max-w-md mx-auto h-fit flex flex-col">
                    <h4 class="text-lg md:text-2xl font-semibold mt-2 dark:text-gray-200">Une Application pour les <br>
                        <strong class="text-2xl md:text-6xl text-blue-600">Apprenants</strong>
                    </h4>
                    <p class="mt-2 text-gray-800 dark:text-gray-400">
                        Bgrfacile met à disposition des apprenants une application android idéale pour visiter
                        l'ensemble des contenus du site avec des interfaces simples et intuitives. <br>
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
    </section>

    {{-- <section class="py-12 headline">
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
                                    <a href="{{ route('donation.page') }}" class="btn-paypal" target="_blank"
                                        style="margin-bottom: 10px">
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
    </section> --}}

    <section class="bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 headline">
        <div class="w-11/12 md:w-4/6 m-auto h-fit flex flex-col-reverse md:flex-row items-center">
            <img src="{{ asset('assets/img/undraw_transfer_money_rywa.svg') }}" alt="" srcset="">
            <div class="max-w-max h-fit pb-3">
                <h2 class="text-3xl md:text-6xl font-bold text-white text-center py-5">Faite une Donation</h2>
                <p class="text-gray-50 mb-2 md:mb-4">
                    Bgrfacile est un projet conçu pour les apprenants. Nous sommes une association qui a pour but de
                    promouvoir le développement de l'informatique et de la culture numérique.
                    Le don est l'un des moyens de soutenir, maintenir et l'améliorer le site.
                </p>
                <a href="{{ route('donation.page') }}" class="btn-paypal my-2" target="_blank"
                    style="margin-bottom: 10px">
                    <i class="fa fa-lock donate-padlock-icon"></i> <span>Faire un don</span>
                </a>
            </div>
        </div>
    </section>

</x-site-layout>
