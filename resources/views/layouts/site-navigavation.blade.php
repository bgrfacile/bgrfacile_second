<nav x-data="{ open: false }"
    class="z-50 w-full bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 shadow">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <!-- Logo -->
                <x-nav-link :href="route('home.page')" :active="request()->routeIs('home.page')"
                    class="flex-shrink-0 flex justify-center items-center">
                    {{-- <x-application-logo class="block h-10 w-auto fill-current text-gray-600" /> --}}
                    <img class="w-3/4" src="{{ asset('assets/logo_bgrfacile.webp') }}" alt="" srcset="">
                </x-nav-link>

                <!-- Navigation Links -->
                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <div x-data="{ open: false }" @click.away="open = false" @close.stop="open = false"
                        class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                        <div class="">
                            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                            <button @click="open =! open" type="button"
                                class="text-gray-500 dark:text-gray-200  group bg-white dark:bg-gray-800 to-accent-focus rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                aria-expanded="false">
                                <span>Explorer</span>
                                <x-svg-chevron class="ml-1" />
                            </button>
                            <div x-show="open" x-transition:enter="transition ease-out duration-200"
                                x-transition:enter-start="transform opacity-0 scale-95"
                                x-transition:enter-end="transform opacity-100 scale-100"
                                x-transition:leave="transition ease-in duration-75"
                                x-transition:leave-start="transform opacity-100 scale-100"
                                x-transition:leave-end="transform opacity-0 scale-95" style="display: none;"
                                @click="open = false" class="absolute right-5 left-5 z-10 mt-6">
                                <!-- content -->
                                <div
                                    class="rounded-lg shadow-lg grid grid-cols-3 gap-4 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">

                                    <a href="{{ route('cours.page') }}"
                                        class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 ">
                                        <x-svg-book-open class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Cours
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Des cours de differents niveau regroupé en un seul endroit
                                            </p>
                                        </div>
                                    </a>

                                    <a href="{{ route('exercices.page') }}"
                                        class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <x-svg-exo class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Exercices
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Entrainer vous avec une incroyable bibliothèque d'exercice.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="{{ route('formation.page') }}"
                                        class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <x-svg-formation class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                                                Formations
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Formez-vous en un domaine précis avec nos foramtions.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="{{ route('bonus.page') }}"
                                        class="dark:text-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <x-svg-bonus class="flex-shrink-0 h-6 w-6" />
                                        <div class="ml-4">
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

                    <x-nav-link :href="route('ecoleEnLigne.page')" :active="request()->routeIs('dashboard')">
                        {{ __('écoles en ligne') }}
                    </x-nav-link>
                    <x-nav-link :href="route('who.page')" :active="request()->routeIs('who.page')">
                        {{ __('Qui sommes nous?') }}
                    </x-nav-link>
                    <x-nav-link :href="route('donation.page')" :active="request()->routeIs('donation.page')">
                        {{ __('Faire un don') }}
                    </x-nav-link>
                </div>
            </div>

            <!-- Settings Dropdown -->
            <div class="hidden sm:flex sm:items-center sm:ml-6">
                <div class="flex-shrink-0 flex items-center ml-4">
                    <a href="{{ route('search.page') }}"
                        class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                        <x-svg-search class="block h-6 w-6 text-gray-600" fill="none" stroke="currentColor" />
                    </a>
                </div>
                <div class="flex-shrink-0 flex items-center ml-4" x-data="{ open: false }"
                    x-init="$watch('open', value => value?document.querySelector('html').classList.add('dark'):document.querySelector('html').classList.remove('dark'))">
                    <button type="button" x-on:click="open = ! open"
                        class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                        <x-svg-sun x-show="open" class="block h-6 w-6 text-gray-600 transform -rotate-90 sun"
                            fill="none" stroke="currentColor" />
                        {{-- <input type="checkbox" checked="checked" id="checkbox"> --}}
                        <x-svg-moon x-show="!open" x-transition
                            class="block h-6 w-6 text-gray-600 transform -rotate-90 moon" fill="none"
                            stroke="currentColor" />
                        {{-- <label class="cursor-pointer label">
                            <input type="checkbox" checked="checked" id="checkbox" class="toggle toggle-primary">
                        </label> --}}
                    </button>
                </div>
                @auth
                    <x-dropdown class="ml-4" align="right" width="48">
                        <x-slot name="trigger">
                            <button
                                class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                <div>{{ Auth::user()->name }}</div>
                                <x-svg-chevron class="ml-1" />
                            </button>
                        </x-slot>

                        <x-slot name="content">
                            <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                                <!-- Authentication -->
                                <x-dropdown-link :href="route('profil.index')">
                                    {{ __('profil') }}
                                </x-dropdown-link>
                                @role('super-admin')
                                    <x-dropdown-link :href="route('dashboard')">
                                        {{ __('Administration') }}
                                    </x-dropdown-link>
                                @endrole
                                <div class="border-b"></div>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <x-dropdown-link :href="route('logout')"
                                        onclick="event.preventDefault();this.closest('form').submit();">
                                        {{ __('Déconnexion') }}
                                    </x-dropdown-link>
                                </form>
                            </div>
                        </x-slot>
                    </x-dropdown>
                @else
                    <div class="ml-1">
                        <button
                            class="shadow left-8 text-neutral-700 pl-4 pr-8 py-1 bg-blue-50 rounded-full relative  cursor-pointer border border-blue-600"><a
                                href="" class="">Inscription</a></button>
                        <button
                            class="shadow-lg text-white px-4 py-1 bg-blue-600 border border-blue-600 rounded-full relative cursor-pointer">
                            <a href="" class="">Connexion</a>
                        </button>
                    </div>
                    {{-- <a href="{{ route('singin.page') }}" class="btn btn-primary rounded-full ml-4">connexion</a> --}}
                @endauth
            </div>

            <!-- Hamburger -->
            <div class="-mr-2 flex items-center sm:hidden">
                <button @click="open =! open"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <x-responsive-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                {{ __('Dashboard') }}
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

                            <x-responsive-nav-link :href="route('logout')"
                                onclick="event.preventDefault();                                                                                                                                                                                                                                                                                                                                                                 this.closest('form').submit();">
                                {{ __('Déconnexion') }}
                            </x-responsive-nav-link>
                        </form>
                    </div>
                @else
                    se connecter
                @endauth
            @endif
        </div>
    </div>
</nav>
