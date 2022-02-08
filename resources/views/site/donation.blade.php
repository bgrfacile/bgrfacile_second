<x-site-layout>
    <x-slot name="header">

    </x-slot>
    <div class="bg-no-repeat bg-cover bg-center relative py-6"
        style="background-image: url({{ asset('assets/img/image_donation.jpg') }});">
        <div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div class="sm:flex sm:flex-row mx-0 justify-center">
            <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                <div class="self-start hidden lg:flex flex-col text-white">
                    <h1 class="mb-3 font-bold text-5xl">👋 Tu veux soutenir le site? Fais un don! </h1>
                    <p class="pr-3">
                        Les dons sont un moyen de soutenir le site.
                        <br>
                        Actuellement, nous n'avons pas de compte bancaire, mais nous sommes à la recherche de
                        financement pour
                        continuer à développer le site.
                    </p>
                </div>
            </div>
            <div class="flex justify-center self-center z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="flex items-center justify-center font-black m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-3 text-red-600 animate-pulse"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd" />
                        </svg>
                        <h3 class="tracking-wide text-3xl text-gray-900">
                            Envoie ta contribution
                        </h3>
                    </div>
                    <form action="{{ route('donation.page.post') }}" method="POST"
                        class="flex flex-col justify-center">
                        @csrf
                        <div class="flex justify-center my-12">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" role="img"
                                    class="h-8 w-8 mr-3 bg-gradient-to-r from-blue-600 to-blue-600 shadow-lg rounded p-1.5 text-gray-100"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path
                                        d="M18 14l5-5l-1.4-1.4l-2.6 2.6V3h-2v7.2l-2.6-2.6L13 9l5 5m1 2v5c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h7v4H7v14h10v-3h2z"
                                        fill="currentColor">
                                    </path>
                                </svg>
                                <span class="font-bold text-gray-900">+242 066443279</span>
                            </div>
                        </div>
                        @if (session('success'))
                            <div class="flex items-center bg-lime-600 ml-4">
                                <div class="px-2 py-1 font-semibold text-lg text-green-800">
                                    Success
                                </div>
                                <div class="text-sm text-green-600">
                                    {{ session('success') }}
                                </div>
                            </div>
                        @endif
                        <label for="email" class="text-sm font-medium">Votre Email (obligatoire)</label>
                        <input id="email"
                            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                            value="{{ old('email') }}" type="email" name="email">
                        @error('email')
                            <span class="text-sm text-red-600">
                                {{ $message }}
                            </span>
                        @enderror
                        <label for="telephone" class="text-sm font-medium">Votre numéro de transfert
                            (obligatoire)</label>
                        <input id="telephone"
                            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                            value="{{ old('telephone') }}" type="text" name="telephone">
                        @error('telephone')
                            <span class="text-sm text-red-600">
                                {{ $message }}
                            </span>
                        @enderror
                        <label for="pseudo" class="text-sm font-medium">Votre pseudo de bienfaiteur
                            (obligatoire)</label>
                        <input id="pseudo"
                            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                            value="{{ old('pseudo') }}" type="text" name="pseudo">
                        @error('pseudo')
                            <span class="text-sm text-red-600">
                                {{ $message }}
                            </span>
                        @enderror
                        <label for="message" class="text-sm font-medium">un messages de votre part (optionnelle)</label>
                        <textarea id="message"
                            class="
                          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                            name="message" placeholder="dite quelque chose">{{ old('message') }}</textarea>
                        @error('message')
                            <span class="text-sm text-red-600">
                                {{ $message }}
                            </span>
                        @enderror
                        <button
                            class="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-blue-600 font-medium text-gray-100 block transition duration-300"
                            type="submit">
                            <span>Notifier-nous</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="container mb-4 py-20 flex mx-auto w-full items-center justify-center">
        <ul class="flex flex-col p-4">
            @forelse ($donations as $donation)
                <li class="border-gray-400 flex flex-row mb-4">
                    <div
                        class="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-blue-400">
                        <div class="flex-1 pl-1 mr-16">
                            <h3 class="font-medium text-black">{{ $donation->pseudo }}</h3>
                            <p>
                                {{ $donation->message }}
                            </p>
                        </div>
                        <div
                            class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-blue-500 justify-center items-center mr-10 p-2">
                            {{ $donation->price . ' Fr' }}
                        </div>
                    </div>
                </li>
            @empty
                <li class="border-gray-400 flex flex-row">
                    aucune donations pour le moment ...
                </li>
            @endforelse

        </ul>
    </div>

</x-site-layout>
