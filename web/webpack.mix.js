let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
    .scripts(
    [
        'resources/assets/js/core/jquery.min.js',
        'resources/assets/js/core/popper.min.js',
        'resources/assets/js/core/bootstrap-material-design.min.js',
        'resources/assets/js/plugins/chartist.min.js',
        'resources/assets/js/plugins/bootstrap-notify.js',
        'resources/assets/js/material-dashboard.js',
    ], 
    'public/js/lib.js')
    .styles([
        'resources/assets/css/material-dashboard.min.css',
        'resources/assets/css/bold.css'
    ], 'public/css/all.css');
