const mix = require("laravel-mix");

if ( mix.inProduction() ) {
    mix.version();
}

mix.ts('src/scripts/main.tsx', 'scripts/main.js')
	.sass('src/styles/main.scss', 'styles/main.css')
	.copy('src/img', 'public/dist/img')
    .setPublicPath('public/dist')
    .setResourceRoot('src')
    .extract()
	.react()

