const mix = require('laravel-mix')

/** 
 * Let's use laravel-mix to minify all the 
 * dependencies used in the frontend, creating a unique output .js
*/

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.sass', 'public/css')