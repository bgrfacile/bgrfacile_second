const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: [
            './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
            './storage/framework/views/*.php',
            './resources/views/**/*.blade.php',
            './resources/js/**/*.js',
            './resources/js/**/*.jsx',
        ],
        options: {
            safelist: [
                /data-theme$/,
            ]
        },
    },

    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            textOpacity: ['dark']
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: true,
        base: false,
        utils: true,
        logs: true,
        rtl: false,
        themes: [
            {
                'mytheme': {
                    'primary': '#2196F3',
                    'primary-focus': '#1e88e5',
                    'primary-content': '#ffffff',
                },

            },
        ],
    },

};
