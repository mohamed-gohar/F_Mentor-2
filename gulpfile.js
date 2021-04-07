var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("sass");

//sass
gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"));
});

//watch tasks
gulp.task("default", ["sass"], function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});
