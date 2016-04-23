//Text Variables
var strt = '>---Starting ';
var end = ' function---<';

//Dependencies Needed
var gulp = require('gulp');
var gls = require('gulp-live-server');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlMinify = require('gulp-html-minifier');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imgS = require('gulp-image');

/*============
=            =
= File Paths =
=            =
=============*/
//Sources
var SCRIPTS_PATH = 'src/**/*.js';
var HTML_PATH = 'src/**/*.html';
var CSS_PATH = 'src/**/*.css';
var IMG_PATH = 'src/**/images/*';

//Distribution
var DIST_DIR = 'dist';
var DIST_HTML = 'dist/**/*.html';
var DIST_CSS = 'dist/**/*.css';
var DIST_JS = 'dist/**/*.js';
var DIST_IMG = 'dist/**/images/*';

/*============
=            =
=   Styles   =
=            =
=============*/
gulp.task('styles', function () {
  console.log(strt + 'Styles' + end);

  return gulp.src(CSS_PATH)
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(DIST_DIR));
});

/*============
=            =
=   Scripts  =
=            =
=============*/
gulp.task('scripts', function () {
  console.log(strt + 'SCRIPTS' + end);

  return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR));
});

/*============
=            =
=    HTML    =
=            =
=============*/

gulp.task('html', function () {
  console.log(strt + 'HTML' + end);

  return gulp.src(HTML_PATH)
    .pipe(htmlMinify({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
      }))
    .pipe(gulp.dest(DIST_DIR));
});

/*============
=            =
=   IMAGES   =
=            =
=============*/

gulp.task('images', function () {
  console.log(strt + 'Images' + end);

  return gulp.src(IMG_PATH)
    .pipe(imgS())
    .pipe(gulp.dest(DIST_DIR));
});


/*============
=   Server   =
=  Functions =
=            =
=============*/
gulp.task('serve', function() {
  //  //1. serve with default settings
  //  var server = gls.static('public'); //equals to gls.static('public', 3000);
  //  server.start();
  //
  //
  //
  //  //3. serve multi folders
  //  var server = gls.static(['dist', '.tmp']);
  //  server.start();

  //2. serve at custom port
  var server = gls.static('dist', 8888);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)

  gulp.watch([DIST_HTML, DIST_CSS, DIST_JS, DIST_IMG], function (file) {
    server.notify.apply(server, [file]);
  });
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(HTML_PATH, ['html']);
  gulp.watch(CSS_PATH, ['styles']);
  gulp.watch(IMG_PATH, ['images']);
});

/*============
=            =
=    Dist    =
=  Function  =
=            =
=============*/
gulp.task('dist', ['images', 'scripts', 'html', 'styles']);
