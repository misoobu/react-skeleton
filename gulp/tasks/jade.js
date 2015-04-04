var gulp = require("gulp");
var jade = require("gulp-jade");
var plumber = require("gulp-plumber");
var config = require("../config").jade;

gulp.task("jade", function(){
  gulp.src(config.src)
      .pipe(plumber())
      .pipe(jade({ pretty: config.pretty }))
      .pipe(gulp.dest(config.build));
});
