var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config');

gulp.task('webserver',function(){
  gulp.src(config.build)
      .pipe(webserver({
        livereload: true,
        port: 8001,
        fallback: 'build/index.html',
        open: true
      }));
});
