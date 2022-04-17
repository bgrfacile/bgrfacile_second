<x-site-layout>
    <x-slot name="title">donation</x-slot>
    <x-slot name="header">

    </x-slot>
    <div class="bg-no-repeat bg-cover bg-center relative py-6" style="background-image: url({{ asset('assets/img/image_donation.jpg') }});">
        <div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div class="sm:flex sm:flex-row mx-0 justify-center">
            <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                <div class="self-start hidden lg:flex flex-col text-white">
                    <h1 class="mb-3 font-bold text-5xl">👋 Tu veux soutenir le site? Fais un don! </h1>
                    <p class="pr-3">
                        Les dons sont un moyen simple et efficace de soutenir le site.
                        <br>
                        L'argent que tu donnes est utilisé pour payer les frais de maintenance du site.
                    </p>
                </div>
            </div>
            <div class="flex justify-center self-center z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="flex items-center justify-center font-black m-3">
                        <h3 class="tracking-wide text-3xl text-gray-900">
                            Faite un Dépot Mobile Money
                        </h3>
                    </div>
                    <form action="{{ route('donation.page.post') }}" method="POST" class="flex flex-col justify-center">
                        @csrf
                        <div class="flex flex-col justify-center my-12">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-8 w-8 mr-3 bg-gradient-to-r from-blue-600 to-blue-600 shadow-lg rounded p-1.5 text-gray-100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path d="M18 14l5-5l-1.4-1.4l-2.6 2.6V3h-2v7.2l-2.6-2.6L13 9l5 5m1 2v5c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h7v4H7v14h10v-3h2z" fill="currentColor">
                                    </path>
                                </svg>
                                <span class="font-bold text-gray-900">+242 066443279</span>
                            </div>
                            <span class="text-center w-full block">
                                si vous voulez Nous informer de votre don,
                                <br>
                                rensignez le numéro de téléphone ci-dessus
                            </span>
                        </div>
                        @if (session('success'))
                        <div class="flex bg-green-100 rounded-lg p-4 my-4 text-sm text-green-700" role="alert">
                            <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                            <div class="font-medium">
                                {{ session('success') }}
                            </div>
                        </div>
                        @endif
                        <label for="email" class="text-sm font-medium">Votre Email (obligatoire)</label>
                        <input id="email" class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500" value="{{ old('email') }}" type="email" name="email" required>
                        @error('email')
                        <span class="text-sm text-red-600">
                            {{ $message }}
                        </span>
                        @enderror
                        <label for="telephone" class="text-sm font-medium">Votre numéro de transfert
                            (obligatoire)</label>
                        <input id="telephone" class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500" value="{{ old('telephone') }}" type="text" name="telephone" required>
                        @error('telephone')
                        <span class="text-sm text-red-600">
                            {{ $message }}
                        </span>
                        @enderror
                        {{-- <label for="pseudo" class="text-sm font-medium">Votre pseudo de bienfaiteur
                            (obligatoire)</label>
                        <input id="pseudo"
                            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-1
                          focus:ring-sky-500
                          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                            value="{{ old('pseudo') }}" type="text" name="pseudo" required>
                        @error('pseudo')
                        <span class="text-sm text-red-600">
                            {{ $message }}
                        </span>
                        @enderror --}}
                        {{-- <label for="message" class="text-sm font-medium">un messages de votre part (optionnelle)</label>
                        <textarea id="message" class="
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
                        @enderror --}}
                        <button class="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-blue-600 font-medium text-gray-100 block transition duration-300" type="submit">
                            <span>
                                Envoyer
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {{-- <div class="container mb-4 py-20 flex mx-auto w-full items-center justify-center">
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
    <div class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-blue-500 justify-center items-center mr-10 p-2">
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
    </div> --}}


</x-site-layout>
