// https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
// https://github.com/thecodercoder/frontend-boilerplate/blob/master/gulpfile.js
// https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a

"use strict";

const gulp = require("gulp");
const server = require("browser-sync").create();
const files = {
    src: ['src/css/*.css', 'src/*.html']
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './src/'
    },
    
    port: 3000
  });
  done();
}

const watch = () => gulp.watch(files.src, reload);

const dev = gulp.series(serve, watch);
exports.default = dev;
