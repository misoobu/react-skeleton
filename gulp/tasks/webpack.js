var gulp = require("gulp");
var webpack = require("webpack");
var gulpWebpack = require("gulp-webpack");
var config = require("../config");

gulp.task("webpack", function () {
  gulp.src(config.webpack.entry)
      .pipe(gulpWebpack(function() {
        if(!config.js.pretty) {
          config.webpack["plugins"] = [new webpack.optimize.UglifyJsPlugin()];
        }
        return config.webpack;
      }()))
      .pipe(gulp.dest(config.js.build));
});
