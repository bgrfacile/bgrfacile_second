<nav x-data="{ open: false }" class="w-full bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 shadow">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <!-- Logo -->
                <x-nav-link :href="route('home.page')" :active="request()->routeIs('home.page')" class="flex-shrink-0 flex justify-center items-center">
                    {{-- <x-application-logo class="block h-10 w-auto fill-current text-gray-600" /> --}}
                    <img class="w-3/4" src="{{ asset('assets/logo_bgrfacile.webp') }}" alt="petit logo de bgrfacile" srcset="">
                </x-nav-link>

                <!-- Navigation Links -->
                <div class="hidden space-x-8 md:-my-px md:ml-10 md:flex overflow-x-auto px-2">
                    <div class="min-w-max flex items-center justify-center" x-data="{ open: false }" @click.away="open = false" @close.stop="open = false" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                        <div class="">
                            <button @click="open =! open" type="button" class="text-gray-500 dark:text-gray-200  group bg-white dark:bg-gray-800 to-accent-focus rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                                <span>Explorer</span>
                                <x-svg-chevron class="ml-1" />
                            </button>
                            <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" style="display: none;" @click="open = false" class="absolute right-5 left-5 z-10 mt-6">
                                <!-- content -->
                                <div class="rounded-lg shadow-lg grid grid-cols-3 gap-4 bg-white dark:bg-gray-700 px-5 py-6 md:gap-8 md:p-8">

                                    <a href="{{ route('cours.page') }}" class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 ">
                                        <x-svg-book-open class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Cours
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Des cours de differents niveaux regroupés en un seul et même endroit.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="{{ route('exercices.page') }}" class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <x-svg-exo class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Exercices
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Entrainez-vous avec une incroyable bibliothèque d'exercice.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="{{ route('formation.page') }}" class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <x-svg-formation class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Formations
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Formez-vous dans le domaine de votre choix.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="{{ route('bonus.page') }}" class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <x-svg-bonus class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Bonus
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Des Podcasts, des jeux et bien d'autres astuces sont mises à votre
                                                disposition.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <x-nav-link class="min-w-max" :href="route('ecoleEnLigne.page')" :active="request()->routeIs('ecoleEnLigne.page')">
                        {{ __('écoles en ligne') }}
                    </x-nav-link>
                    <x-nav-link class="min-w-max" :href="route('who.page')" :active="request()->routeIs('who.page')">
                        {{ __('Qui sommes nous?') }}
                    </x-nav-link>
                </div>
            </div>

            <!-- Settings Dropdown -->
            <div class="hidden md:flex md:items-center md:ml-6">
                <div class="flex-shrink-0 flex items-center ml-4">
                    <a href="{{ route('search.page') }}" class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                        <x-svg-search class="block h-6 w-6 text-gray-600" fill="none" stroke="currentColor" />
                    </a>
                </div>
                {{-- <div class="flex-shrink-0 flex items-center ml-4" x-data="{ open: false }" x-init="$watch('open', value => value ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark'))">
                    <button type="button" x-on:click="open = ! open" class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                        <x-svg-sun x-show="open" class="block h-6 w-6 text-gray-600 transform -rotate-90 sun" fill="none" stroke="currentColor" />
                        <x-svg-moon x-show="!open" x-transition class="block h-6 w-6 text-gray-600 transform -rotate-90 moon" fill="none" stroke="currentColor" />
                    </button>
                </div> --}}

                @auth
                <x-dropdown class="ml-4" align="right" width="48">
                    <x-slot name="trigger">
                        <button class="h-full flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                            <img alt="avatar" style="width: 40px;height: 40px;object-fit: cover;border-radius: 9999px;" className="w-10 h-4 object-cover rounded-full bg-white" @php $slug=Str::slug(Auth::user()->name, '-');
                            @endphp
                            src="{{ Auth::user()->url_image == null? "https://ui-avatars.com/api/?name=$slug&background=0D8ABC&color=fff": url(Auth::user()->url_image) }}" />
                            <x-svg-chevron class="ml-1" />
                        </button>
                    </x-slot>

                    <x-slot name="content">
                        <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                            <!-- Authentication -->
                            <x-dropdown-link :href="route('profil.index')">
                                {{ __('Profil') }}
                            </x-dropdown-link>
                            @role('super-admin')
                            <x-dropdown-link :href="route('dashboard')">
                                {{ __('Administration') }}
                            </x-dropdown-link>
                            @endrole
                            <div class="border-b"></div>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <x-dropdown-link :href="route('logout')" onclick="event.preventDefault();this.closest('form').submit();">
                                    {{ __('Déconnexion') }}
                                </x-dropdown-link>
                            </form>
                        </div>
                    </x-slot>
                </x-dropdown>
                @else
                <div class="ml-1 flex flex-col md:flex-row">
                    <a href="{{ route('signin.page') }}" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        se connecter
                    </a>
                    <a href="{{ route('signup.page') }}" class="min-w-max ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        s'inscrire
                    </a>
                </div>
                @endauth
            </div>

            <!-- Hamburger -->
            <div class="-mr-2 flex items-center md:hidden">
                <button @click="open =! open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <div :class="{'block': open, 'hidden': ! open}" class="hidden md:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <x-responsive-nav-link :href="route('home.page')">
                {{ __('Accueil') }}
            </x-responsive-nav-link>

            <div x-data="{ open: false }" @click.away="open = false" @close.stop="open = false" class="block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">
                <div class="">
                    <button @click="open =! open" type="button" class="text-gray-500 dark:text-gray-200  group bg-white dark:bg-gray-800 to-accent-focus rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                        <span>Explorer</span>
                        <x-svg-chevron class="ml-1" />
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" style="display: none;" @click="open = false" class="absolute right-5 left-5 z-10 mt-6">
                        <div class="rounded-lg shadow-lg grid grid-rows-3 gap-4 bg-white dark:bg-gray-700 px-5 py-6 md:gap-8 md:p-8">

                            <a href="{{ route('cours.page') }}" class="dark:text-gray-400 -m-3 p-3 flex flex-col items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 ">
                                <x-svg-book-open class="flex-shrink-0 h-6 w-6" />
                                <div class="">
                                    <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                        Cours
                                    </p>
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Des cours de differents niveau regroupé en un seul endroit
                                    </p>
                                </div>
                            </a>

                            <a href="{{ route('exercices.page') }}" class="dark:text-gray-400 -m-3 p-3 flex flex-col items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <x-svg-exo class="flex-shrink-0 h-6 w-6" />
                                <div class="">
                                    <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                        Exercices
                                    </p>
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Entrainer vous avec une incroyable bibliothèque d'exercice.
                                    </p>
                                </div>
                            </a>

                            <a href="{{ route('formation.page') }}" class="dark:text-gray-400 -m-3 p-3 flex flex-col items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <x-svg-formation class="flex-shrink-0 h-6 w-6" />
                                <div class="">
                                    <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                        Formations
                                    </p>
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Formez-vous en un domaine précis avec nos foramtions.
                                    </p>
                                </div>
                            </a>

                            <a href="{{ route('bonus.page') }}" class="dark:text-gray-400 -m-3 p-3 flex flex-col items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <x-svg-bonus class="flex-shrink-0 h-6 w-6" />
                                <div class="">
                                    <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                        Bonus
                                    </p>
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Des Podcasts, des jeux et bien d'autres astuces que bgrfacile met à
                                        votre disposition.
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <x-responsive-nav-link :href="route('ecoleEnLigne.page')" :active="request()->routeIs('ecoleEnLigne.page')">
                {{ __('écoles en ligne') }}
            </x-responsive-nav-link>
            <x-responsive-nav-link :href="route('who.page')" :active="request()->routeIs('who.page')">
                {{ __('Qui sommes nous?') }}
            </x-responsive-nav-link>
        </div>

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200">
            @if (Route::has('login'))
            @auth
            <div class="px-4">
                <div class="font-medium text-base text-gray-800">{{ Auth::user()->name }}</div>
                <div class="font-medium text-sm text-gray-500">{{ Auth::user()->email }}</div>
            </div>

            <div class="mt-3 space-y-1">
                <!-- Authentication -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-responsive-nav-link :href="route('logout')" onclick="event.preventDefault();                                                                                                                                                                                                                                                                                                                                                                 this.closest('form').submit();">
                        {{ __('Déconnexion') }}
                    </x-responsive-nav-link>
                </form>
            </div>
            @else
            <div class="mb-2 flex justify-around items-center p-1">
                <a href="{{ route('signin.page') }}" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    se connecter
                </a>
                <a href="{{ route('signup.page') }}" class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    s'inscrire
                </a>
            </div>
            @endauth
            @endif
        </div>
    </div>
</nav>
