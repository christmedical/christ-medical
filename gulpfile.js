require('laravel-elixir-vueify'); //https://github.com/JeffreyWay/laravel-elixir-vueify
var elixir = require('laravel-elixir');
var gulp = require('gulp');
var connect = require('gulp-connect');

//Config options https://github.com/laravel/elixir/blob/master/src/Config.js
elixir.config.assetsPath = 'src/assets';
elixir.config.publicPath = 'public/assets';
//console.log(elixir.config);

gulp.task('serve', function() {
    return connect.server({
        root: 'public'
    });
});

elixir(function(mix) {
    mix.sass('app.scss')
    .browserify('app.js')
    .copy('node_modules/font-awesome/fonts', 'public/assets/fonts')
    //.version(['css/app.css', 'js/app.js']);
    .browserSync({
        proxy: 'http://localhost:8080',
        notify: false
    });
});
