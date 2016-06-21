var elixir = require('laravel-elixir');
var gulp = require('gulp');
require('laravel-elixir-vueify'); //https://github.com/JeffreyWay/laravel-elixir-vueify

//Config options https://github.com/laravel/elixir/blob/master/src/Config.js
elixir.config.assetsPath = 'src/assets/';
elixir.config.publicPath = 'public/assets';
//console.log(elixir.config);

elixir(function(mix) {
    mix.sass('app.scss');
    .browserify('app.js');
    //.version(['css/app.css', 'js/app.js']);
    .browserSync({
        proxy: 'http://christ-medical.dev/',
        notify: false
    });
});
