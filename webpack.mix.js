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

// mix.js('resources/js/app.js', 'public/js').postCss('resources/css/appCss/app.css', 'public/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('autoprefixer'),
// ]);

/*
    Asset de appCourse
*/

mix.js('resources/js/appCourse.js', 'public/js')
    .react()
    .postCss('resources/css/appCourse/appCourse.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig(require('./webpack.config'));

/*
    Asset de AppDashboard
*/
// mix.js('resources/js/appDashboard.js', 'public/js')
//     .react()
//     .postCss('resources/css/appDashboard/appDashboard.css', 'public/css', [
//         require('postcss-import'),
//         require('tailwindcss'),
//         require('autoprefixer'),
//     ])
//     .options({
//         /* hmrOptions: hmrOptions */
//     })
//     .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

