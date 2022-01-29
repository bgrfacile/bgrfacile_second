const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    content:  [
            './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
            './storage/framework/views/*.php',
            './resources/views/**/*.blade.php',
            './resources/js/**/*.js',
            './resources/js/**/*.jsx',
        ],
    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: colors.neutral,
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            textOpacity: ['dark']
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        // require('daisyui'),
        require('@tailwindcss/typography'),
    ],
    // daisyui: {
    //     styled: true,
    //     themes: true,
    //     base: false,
    //     utils: true,
    //     logs: true,
    //     rtl: false,
    //     themes: [
    //         {
    //             'mytheme': {
    //                 'primary': '#2196F3',
    //                 'primary-focus': '#1e88e5',
    //                 'primary-content': '#ffffff',
    //             },

    //         },
    //     ],
    // },

};
