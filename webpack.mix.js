var mix = require('laravel-mix');

mix.setPublicPath('web/assets');

mix.babel([
    'assets/plugins/jquery-3.3.1.min.js',
    'assets/plugins/classie.js'

], 'web/assets/js/head.js');

mix.babel([
    'assets/plugins/bootstrap/bootstrap.min.js',
    'assets/plugins/bootstrap/popper.min.js',
    'assets/plugins/matchHeight.js',
    'assets/plugins/smooth-scroll.min.js',
    'assets/plugins/slick/slick.min.js',
    'assets/plugins/masonry.pkgd.min.js',
    'assets/plugins/isotope.pkgd.min.js',
    'assets/plugins/wow.min.js',
    'assets/plugins/animateNumber.min.js',
    'assets/js/main.js',
    'assets/js/custom.js'

], 'web/assets/js/body.js');

mix.sass('assets/sass/main.scss',    '../../assets/build/theme.css');

mix.styles([

    'assets/plugins/bootstrap/bootstrap.min.css',
    'assets/css/fontawesome.min.css',
    'assets/css/animate.css',
    'assets/plugins/slick/slick.css',
    'assets/build/theme.css'

], 'web/assets/css/theme.css');
