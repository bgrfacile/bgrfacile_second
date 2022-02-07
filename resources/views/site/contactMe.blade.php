<x-site-layout>
    <x-slot name="header">

    </x-slot>
    <div class="w-full" x-data="submitForm()">
        <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                <p class="text-3xl font-bold leading-7 text-center">Contactez nous</p>
                <form action="/api/v1/contact" method="POST" @submit.prevent="submitData">
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none">Nom</label>
                            <input x-model="formData.name" id="name" type="text"
                                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="font-semibold leading-none">Téléphone</label>
                            <input x-model="formData.telephone" id="telephone" type="email"
                                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibold leading-none">Sujet</label>
                            <input x-model="formData.email" id="subject" type="email"
                                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                        </div>

                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold leading-none">Message</label>
                            <textarea x-model="formData.message" id="message" type="text"
                                class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button type="submit" x-text="buttonLabel" :disabled="loading"
                            class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>
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
    </script>

</x-site-layout>
