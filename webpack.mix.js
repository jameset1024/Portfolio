const mix = require("laravel-mix");

mix.setPublicPath('public/dist');

mix.ts('src/scripts/main.tsx', 'scripts/main.js')
	.sass('src/styles/main.scss', 'styles/main.css')
	.copy('src/img', 'public/dist/img')
    .extract()
	.react();

if ( mix.inProduction() ) {
    mix.version();
}
