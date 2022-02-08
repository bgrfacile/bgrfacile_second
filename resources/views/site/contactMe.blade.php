<x-site-layout>
    <x-slot name="header">

    </x-slot>
    <div class="w-full" x-data="submitForm()">
        <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                <p class="text-3xl font-bold leading-7 text-center">Contactez nous</p>
                @if (session('success'))
                    <div class="flex bg-green-100 rounded-lg p-4 my-4 text-sm text-green-700" role="alert">
                        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div class="font-medium">
                            {{ session('success') }}
                        </div>
                    </div>
                @endif
                <form action="{{ route('contact.page.post') }}" method="POST">
                    @csrf
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label for="name" class="font-semibold leading-none">Nom *</label>
                            <input id="name" type="text" name="name" value="{{ old('name') }}"
                                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                            @error('name')
                                <div class="text-red-600 text-sm mt-2">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label for="telephone" class="font-semibold leading-none">Téléphone</label>
                            <input id="telephone" type="text" name="telephone" value="{{ old('telephone') }}"
                                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                            @error('telephone')
                                <div class="text-red-600 text-sm mt-2">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label for="email" class="font-semibold leading-none">Email *</label>
                            <input id="email" type="email" name="email" value="{{ old('email') }}"
                                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                            @error('email')
                                <div class="text-red-600 text-sm mt-2">{{ $message }}</div>
                            @enderror
                        </div>

                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label for="message" class="font-semibold leading-none">Message *</label>
                            <textarea id="message" type="text" name="message"
                                class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">{{ old('message') }}</textarea>
                            @error('message')
                                <div class="text-red-600 text-sm mt-2">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button type="submit"
                            class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {{-- <script>
        function submitForm() {

            let name = document.querySelector('#name').value;
            let email = document.querySelector('#email').value;
            let message = document.querySelector('#message').value;
            let subject = document.querySelector('#subject').value;
            let telephone = document.querySelector('#telephone').value;
            if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
                submitForm()
            } else {
                alert('Veuillez remplir tous les champs')
            }
            let formData = new FormData();
            formData.append('username', name);
            formData.append('subject', subject);
            formData.append('email', email);
            formData.append('message', message);
            fetch('/api/v1/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(() => JSON.parse(JSON.stringify(formData)))
                .then((result) => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    </script> --}}

</x-site-layout>
