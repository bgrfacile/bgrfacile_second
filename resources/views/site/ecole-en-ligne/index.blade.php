<x-site-layout>
    <x-slot name="header"></x-slot>

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

    <section class="w-10/12 m-auto py-8 flex flex-col">
        <h2 class="text-3xl md:text-5xl text-center font-bold text-blue-600 mb-2 md:mb-4">
            Pour les apprenants
        </h2>
        <div class="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-8">
            <div class="rounded-full bg-amber-100 w-80 shadow-xl">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1syc3eqp.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-11/12 md:w-8/12">
                <h3 class="text-2xl font-bold">Retrouver son école</h3>
                <p class="text-xl py-4">
                    Il est très simple pour nos visiteurs de retrouver une école dans notre réseau d'établissements
                    scolaires.il suffit de faire une recherche avec le nom de l'établissement et servez-vous des
                    filtres.
                </p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row-reverse justify-start items-center gap-8">
            <div class="rounded-full bg-green-100 w-80 shadow-xl">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vmmezcyz.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-11/12 md:w-8/12">
                <h3 class="text-2xl font-bold">Se Connecter à son école</h3>
                <p class="text-xl py-4">
                    Chaque apprenant peut se connecter gratuitement à son école en ligne.
                    Il suffit de cliquer sur le bouton se connecter présent sur chaque école et de remplir les champs
                    demandés.
                </p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-8">
            <div class="rounded-full bg-pink-100 w-80 shadow-xl">
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9zhayktd.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-11/12 md:w-8/12">
                <h3 class="text-2xl font-bold">Interagir avec son école</h3>
                <p class="text-xl py-4">
                    Une fois connecté, vous pouvez consulter: les informations de votre école, les évènements, les
                    supports de cours et examens, l'emploi du temps, les dates d'évaluations, les evaluations,les
                    relévés
                    de notes, les mails...
                </p>
            </div>
        </div>
        <h2 class="text-3xl md:text-5xl text-center font-bold text-blue-600 mb-2 md:mb-4">
            Pour les formateurs
        </h2>
        <div class="flex flex-col md:flex-row-reverse justify-start items-center gap-8">
            <div class="rounded-full bg-green-100 w-80 shadow-xl">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vmmezcyz.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-11/12 md:w-8/12">
                <h3 class="text-2xl font-bold">Se Connecter à son école</h3>
                <p class="text-xl py-4">
                    Chaque apprenant peut se connecter gratuitement à son école en ligne.
                    Il suffit de cliquer sur le bouton se connecter présent sur chaque école et de remplir les champs
                    demandés.
                </p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-8">
            <div class="rounded-full bg-pink-100 w-80 shadow-xl">
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9zhayktd.json"
                    background="transparent" speed="1" style="width: 320px; height: 320px;" loop autoplay>
                </lottie-player>
            </div>
            <div class="w-11/12 md:w-8/12">
                <h3 class="text-2xl font-bold">Interagir avec l'école et sa classe</h3>
                <p class="text-xl py-4">
                    Une fois connecté à une école en ligen, un formateur peut consulter les informations de la classe
                    et les évènements, les supports de cours et examens, l'emploi du temps, les dates d'évaluations,
                    les evaluations,les relévés de notes, les mails...
                </p>
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
                            <div class="p-3 text-3xl text-gray-800 font"> Créer un compte sur bgrfacile </div>
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
                        <div class="text-3xl font-black text-gray-500">Etape 2</div>
                        <div class="text-gray-500 text-sm text-center">Informations sur l'école en ligne</div>
                    </div>
                    <div class="h-full border-r-4 border-transparent">
                        <div class="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Etape 2</span> - Formulaire de creation</div>
                            <div class="p-3 text-3xl text-gray-800 font">Renseigner les informations de votre école
                            </div>
                            <div class="px-3 pb-6">
                                Une fois votre compte crée, il vous suffit de cliquer une bouton
                                crée une école en ligne disponible sur votre profil et de renseigner les
                                informations nécéssaires demander
                            </div>
                        </div>
                        <div class="md:w-96 w-full p-5"><img src="{{ asset('assets/img/undraw_create_re_57a3.svg') }}"
                                alt="step 2" class="object-scale-down"></div>
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
                        <div class="text-3xl font-black text-gray-500 text-center">Etape 3</div>
                        <div class="text-gray-500 text-sm">Validation des informations</div>
                    </div>
                    <div class="h-full border-l-4 border-transparent">
                        <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Etape 3</span> - Validation des informations</div>
                            <div class="p-3 text-3xl text-gray-800 font">Validation des informations</div>
                            <div class="px-3 pb-6">Les informations renseigner sont traité et validé par
                                bgrfacile.s'ils sont valide,un mail
                                de validation est renvoyer avec les informations nécessaires de connexion sur votre
                                école en ligne.</div>
                        </div>
                        <div class="md:w-96 w-full p-5"><img src="{{ asset('assets/img/undraw_create_re_57a3.svg') }}"
                                alt="step 3" class="object-scale-down"></div>
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
                        <div class="text-3xl font-black text-gray-500">Etape 4</div>
                        <div class="text-gray-500 text-sm">Connexion</div>
                    </div>
                </div>
                <div class="flex-auto border rounded  border-gray-300">
                    <div class="flex md:flex-row flex-col items-center">
                        <div class="flex-auto">
                            <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span
                                    class="font-black">Etape 4</span> - Connexion</div>
                            <div class="p-3 text-3xl text-gray-800 font">Choisir un tarif et se connecter</div>
                            <div class="px-3 pb-6">
                                une fois vos informations validé et vos tarifs enregistrer, vous pouvez vous connecter.
                            </div>
                        </div>
                        <div class="md:w-96 w-full p-5"><img
                                src="{{ asset('assets/img/undraw_create_re_57a3.svg') }}" alt="step 4"
                                class="object-scale-down"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="container">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                    <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                        <h2 class="text-3xl md:text-5xl text-center font-bold text-blue-600 mb-2 md:mb-4">
                            Fonctionnalités de l'écoles en ligne
                        </h2>
                        <p class="text-base text-body-color">
                            Plusieurs fonctionnalités indispensables pour les écoles en ligne sont disponibles pour
                            les établissements.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                        class="p-10 md:px-7
                    xl:px-10
                    rounded-[20px]
                    bg-white
                    shadow-md
                    hover:shadow-lg
                    mb-8
                    ">
                        <div
                            class="
                       w-[70px]
                       h-[70px]
                       flex
                       items-center
                       justify-center
                       bg-primary
                       rounded-2xl
                       mb-8
                       ">
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M10 13c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm8.5-2l1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09L18.5 9zm2.78 3.72L20.5 11l-.78 1.72l-1.72.78l1.72.78l.78 1.72l.78-1.72L23 13.5l-1.72-.78zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47l-2.5-4.33l-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95l-2.5 4.33l1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47l2.5 4.33l2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94l2.5-4.33l-1.94-1.47c.01-.11.01-.24.01-.36zm-1.42 3.64l-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73l-.73-1.27l1.49-1.13c-.12-.39-.18-.8-.18-1.23c0-.43.06-.84.18-1.23l-1.49-1.13l.73-1.27l1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73l.73 1.27l-1.49 1.13c.12.39.18.8.18 1.23c0 .43-.06.84-.18 1.23l1.49 1.13l-.73 1.29z">
                                </path>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-xl text-dark mb-3">
                            Gestionnaires des élèves
                        </h4>
                        <p class="text-body-color">
                            Vous pouvez ajouter, modifier, supprimer des élèves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full pt-16 pb-20 ">
        <div class="px-10 mx-auto text-center max-w-7xl">
            <h2 class="text-5xl font-bold text-blue-600">
                Les differents tarifs de l'application
            </h2>
            <p class="mt-3 text-lg text-gray-500">
                Vous aurez la possibilté de modifier si besion de vos tarifs en fonction de votre école.
            </p>
            <div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">

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
                            <h3 class="text-xl font-bold">Tarif par défaut</h3>
                            <p class="tracking-tight text-gray-500">
                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                <span class="text-3xl font-bold text-gray-800">0</span>
                                <span class="text-sm -translate-y-0.5 inline-block transform">/ Gratuit</span>
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
                            <span class="text-left">Une page public sur l'établissement</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Visibilité sur internet</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Assistance par e-mail prioritaire</span>
                        </li>
                    </ul>

                    <a href="#_"
                        class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                        <span
                            class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
                        <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                        <span class="relative">Choisissez ce forfait </span>
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
                            <h3 class="text-xl font-bold">Tarif par essentiel</h3>
                            <p class="tracking-tight text-gray-500">
                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                <span class="text-3xl font-bold text-gray-800">167,47</span>
                                <span class="text-sm -translate-y-0.5 inline-block transform">/ an</span>
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
                            <span class="text-left">Possibilité d'interagir avec ses élèves</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Possibilité d'interagir avec les professeurs</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Access aux gestionnaire en ligne mais limités
                            </span>
                        </li>
                        {{-- <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Accès </span>
                        </li> --}}
                    </ul>

                    <a href="#_"
                        class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                        <span
                            class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                        <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                        <span class="relative">Choisissez ce forfait</span>
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
                            <h3 class="text-xl font-bold">Tarif par complet</h3>
                            <p class="tracking-tight text-gray-500">
                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                <span class="text-3xl font-bold text-gray-800">334,93</span>
                                <span class="text-sm -translate-y-0.5 inline-block transform">/ an</span>
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
                            <span class="text-left">Accèes à l'application de gestion complète</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Sauvegarde sur le cloud des données</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Access à une application de gestion complete et hors
                                ligne</span>
                        </li>
                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-left">Notification par sms des professeurs</span>
                        </li>
                    </ul>

                    <a href="#_"
                        class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                        <span
                            class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-red-400"></span>
                        <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                        <span class="relative">Choisissez ce forfait</span>
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

    {{-- <section class="relative bg-white overflow-hidden">
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
    </section> --}}

    <div class="w-full py-24 mx-auto flex items-center justify-center bg-black">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full">
                <h2 class="w-full text-center text-3xl md:text-6xl font-bold mb-4 px-2">
                    Quelques écoles en ligne sur bgrfacile.com
                </h2>
            </div>
            <div class="max-w-2xl mx-auto">

                <div id="default-carousel" class="relative" data-carousel="static">
                    <!-- Carousel wrapper -->
                    <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                        <!-- Item 1 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <span
                                class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First
                                Slide</span>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                alt="...">
                        </div>
                        <!-- Item 2 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                alt="...">
                        </div>
                        <!-- Item 3 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                alt="...">
                        </div>
                    </div>
                    <!-- Slider indicators -->
                    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"
                            data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                            data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                            data-carousel-slide-to="2"></button>
                    </div>
                    <!-- Slider controls -->
                    <button type="button"
                        class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                        data-carousel-prev>
                        <span
                            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span class="hidden">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                        data-carousel-next>
                        <span
                            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                            <span class="hidden">Next</span>
                        </span>
                    </button>
                </div>

                <p class="mt-5">
                    Si vous voulez voir plus d'écoles et même trouver votre école, rendez-vous sur : <a
                        class="text-blue-600 hover:underline" href="#" target="_blank">ecole.bgrfacile.com</a>.
                </p>
                <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
            </div>
            {{-- <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <input
                    class=" border-white border-2  text-base w-full font-medium leading-none text-gray-50 p-4 focus:outline-none bg-transparent placeholder-white"
                    placeholder="Email Address" />
                <button
                    class="focus:outline-none focus:ring-offset-2 focus:ring border border-white text-gray-50 bg-transparent hover:bg-blue-600 py-4 px-6 hover:bg-opacity-75 transition-colors duration-75 ease-linear">
                    Souscrire
                </button>
            </div> --}}
        </div>
    </div>
</x-site-layout>
