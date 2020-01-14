var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});


gulp.task('minify-css', () => {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass', 'minify-css')); 
});