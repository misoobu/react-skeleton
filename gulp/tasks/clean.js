var gulp = require("gulp");
var rimraf = require("rimraf");
var config = require("../config");

gulp.task("clean", function (cb) {
  rimraf(config.build, cb);
});
