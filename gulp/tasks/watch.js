var gulp = require("gulp");
var watch = require("gulp-watch");
var config = require("../config").watch;

gulp.task("watch", function () {
  watch(config.js, function () {
    gulp.start(["webpack"]);
  });

  watch(config.styl, function () {
    gulp.start(["stylus"]);
  });

  watch(config.jade, function() {
    gulp.start(["jade"]);
  });

  watch(config.www, function () {
    gulp.start(["copy"]);
  });
});
