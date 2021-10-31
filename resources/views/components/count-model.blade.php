<div class="flex justify-center items-center">
    <div class="h-16 w-16 mr-6 bg-gray-400 dark:bg-gray-200 flex justify-center items-center rounded-full">
        {{ $svg }}
    </div>
    <div class="flex-1">
        <div class="flex flex-col">
            <p class="uppercase text-lg text-gray-500 dark:text-gray-400">{{ $name }}</p>
            <div x-data="{ current: 0, target: {{ $count }}, time: 3000}" x-init="() => {
                start = current;
                const interval = Math.max(time / (target - start), 5);
                const step = (target - start) /  (time / interval);
                const handle = setInterval(() => {
                    if(current < target)
                        current += step
                    else {
                        clearInterval(handle);
                        current = target
                    }
                    }, interval)
            }">

                <strong class="text-4xl font-medium text-black dark:text-gray-200"
                    x-text="''+Math.round(current)"></strong>
            </div>

        </div>
    </div>
</div>
