//Поключаем модули галпа
const gulp = require('gulp');

const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// const jsmin = require('gulp-uglify');

const del = require('del');

const browserSync = require('browser-sync').create();



//Порядок подключения css файлов
const cssFiles = [
  './src/scss/fonts.scss',
  './src/scss/config.scss',
  './src/scss/UI/*.scss',
  './src/scss/svg.scss',
  './src/scss/animation.scss',
  './src/scss/header.scss',
  './src/scss/main/*.scss',
  './src/scss/reklamodatelyam/*.scss',
  './src/scss/blogeram/*.scss',
  './src/scss/good-choice/*.scss',
  './src/scss/kak-effektivno-rabotat-s-blogerami/*.scss',
  './src/scss/baza_znaniy/*.scss',
  './src/scss/dashboard/*.scss',
  './src/scss/search-bloggers/*.scss',
  './src/scss/blogger/*.scss',
  './src/scss/checkout/*.scss',
  // './src/scss/404/*.scss',
  './src/scss/footer.scss',
]
// //Порядок подключения js файлов
// const jsFiles = [
// 	'./src/js/lib.js',
// 	'./src/js/main.js'
// ]

function styles() {
	return gulp.src(cssFiles)
	// .pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cssmin({
  	level: 2
  }))
  // .pipe(sourcemaps.write('./'))
  .pipe(rename({
  	suffix: '.min'
  }))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
}


function scripts() {
	return gulp.src('./src/js/**/*.js')
	.pipe(concat('app.js'))
 // .pipe(babel({
 //          presets: ['@babel/env']
 //      }))
        // .pipe(babel({
        //     plugins: ['@babel/transform-runtime']
        // }))
	// .pipe(jsmin({
	// 	toplevel: false
	// }))
  .pipe(rename({
  	suffix: '.min'
  }))
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.stream());
}


function clear() {
	return del(['css/*','js/*']);
}


function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
      ghostMode: false,
      port: 3000,
      notify: true,
      ghostMode: false
    }
  });
  gulp.watch('./src/scss/**/*.scss', styles);
  gulp.watch('./src/js/**/*.js', scripts);
  gulp.watch("./*.html").on('change', browserSync.reload);
}


gulp.task('clear', clear);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);


gulp.task('build', styles);
gulp.task('dev', gulp.series('build','watch'));