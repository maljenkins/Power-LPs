const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const sass = require("gulp-sass");
const data = require("gulp-data");
const prettier = require("gulp-prettier");


function nunjucks() {
  return gulp
    .src("./src/templates/*.njk")
    .pipe(
      data(function () {
        return require("./src/data/global.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["./src/templates/"],
      })
    )
    .pipe(gulp.dest("./dist/"));
}

function pretty() {
  return gulp
    .src("./dist/*.html")
    .pipe(prettier({ singleQuote: true }))
    .pipe(gulp.dest("./dist/"));
}


const build = gulp.series(nunjucks, pretty);

exports.default = build;