<footer class="relative bg-blueGray-200 pt-8 pb-6 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto sm:px-6 p-6 lg:px-8">
        <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
                <h4 class="text-3xl font-semibold text-black dark:text-gray-200">bgrfacile</h4>
                <h5 class="text-lg mt-0 mb-2 text-blueGray-600 dark:text-gray-400">
                    Un apprentissage de marque et un pont vers la connaissance.
                </h5>
                <div class="mt-6 lg:mb-0 mb-6">
                    <a href="https://www.facebook.com/bgrfacile" target="_blank" class="bg-blue-500 mx-0.5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Facebook</span>
                        </button>
                        <a href="https://www.linkedin.com/company/bgrfacile/about" target="_blank" class="bg-blue-300 mx-0.5 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                            <svg width="0.88em" height="1em" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z">
                                </path>
                            </svg>
                            <span>linkedin</span>
                        </a>
                </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
                <div class="flex flex-wrap items-top mb-6">
                    <div class="w-full lg:w-4/12 px-4 ml-auto">
                        <span class="block uppercase text-black text-lg font-bold mb-2 dark:text-gray-200">
                            Autres liens
                        </span>
                        <ul class="list-unstyled">
                            <li>
                                <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="{{ url("/api/documentation") }}">API</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="{{ route('contact.page') }}">Contact par Email</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="{{ route('about.page') }}">À propos du site</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="{{ route('who.page') }}">Qui sommes-nous?</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 dark:text-gray-400 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="{{ route('politique.page') }}">Politique de confidentialité</a>
                            </li>

                        </ul>
                    </div>
                    {{-- <div class="w-full lg:w-4/12 px-4">
                        <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other
                            Resources</span>
                        <ul class="list-unstyled">
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT
                                    License</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                    href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                            </li>
                        </ul>
                    </div> --}}
                </div>
            </div>
        </div>
        <hr class="my-6 border-blueGray-300">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 dark:text-gray-200 font-semibold py-1">
                    Copyright © <span id="get-current-year">2022</span><a href="https://bgrfacile.com/" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Bgrfacile
                        {{-- <a href="#" class="text-blueGray-500 hover:text-blueGray-800">Bénaja Bendo M.</a> --}}
                </div>
            </div>
        </div>
    </div>
</footer>
