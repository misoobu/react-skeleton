var gulp = require("gulp");
var plumber = require("gulp-plumber");
var stylus = require("gulp-stylus");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var config = require("../config").stylus;

gulp.task("stylus", function () {
  gulp.src(config.src)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(stylus({
        compress: !config.pretty
      }))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(concat(config.output))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(config.build));
});
