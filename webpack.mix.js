const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
/*
    Asset du site
*/

// mix.js('resources/js/appSite/app.js', 'public/js/appSite').postCss('resources/css/app.css', 'public/css/appSite', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('autoprefixer'),
// ]);

/*
    Asset de appCourse
*/

// mix.js('resources/js/appCourse/app.js', 'public/js/appCourse')
//     .react()
//     .postCss('resources/js/appCourse/app.css', 'public/css/appCourse', [
//         require('postcss-import'),
//         require('tailwindcss'),
//         require('autoprefixer'),
//     ])
//     .webpackConfig(require('./webpack.config'));

/*
    Asset de AppDashboard
*/
mix.ts('resources/js/backend/app.js', 'public/js/backend')
    .react()
    .postCss('resources/js/backend/app.css', 'public/css/backend', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .options({
        /* hmrOptions: hmrOptions */
    })
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

