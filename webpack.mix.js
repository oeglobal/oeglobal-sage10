const mix = require('laravel-mix');
const {whitelist, whitelistPatterns} = require('purgecss-with-wordpress');

require('mix-tailwindcss');
require('laravel-mix-purgecss');
const tailwindcss = require('tailwindcss');


// Public path helper
const publicPath = path => `${mix.config.publicPath}/${path}`;

// Source path helper
const src = path => `resources/assets/${path}`;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

// Public Path
mix
  .setPublicPath('./dist')
  .setResourceRoot(`/app/themes/sage/${mix.config.publicPath}/`)
  .webpackConfig({
    output: {publicPath: mix.config.resourceRoot}
  });

// Browsersync
mix.browserSync('latam.test');

// Styles
mix.sass(src`styles/app.scss`, 'styles')
  .tailwind();

// JavaScript
mix.js(src`scripts/app.js`, 'scripts')
  .js(src`scripts/customizer.js`, 'scripts');

// https://github.com/roots/sage/issues/2204
//  .extract();

// Assets
mix.copyDirectory(src`images`, publicPath`images`)
  .copyDirectory(src`fonts`, publicPath`fonts`);

// Autoload
mix.autoload({
  jquery: ['$', 'window.jQuery'],
});

// Options
mix.options({
  processCssUrls: false,
});

// Source maps when not in production.
mix.sourceMaps(false, 'source-map');

// Hash and version files in production.
if (mix.inProduction()) {
  mix.version();
  mix.purgeCss();
}
