<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    You're logged in!
                </div>
            </div>
        </div>
    </div>

    <div class="pb-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <h2>Liste user</h2>
                </div>
                <div class="p-6">
                    @foreach ($users as $user)
                        <div>
                            {{ $user->name }}
                            @can('update', $user)
                                <strong><a href="#">Editer</a></strong>
                            @endcan
                        </div>
                    @endforeach

                </div>
            </div>
        </div>
    </div>

</x-app-layout>
