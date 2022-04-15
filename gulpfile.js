const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const del = require('del');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('Compile SASS', () => {
    return gulp.src('./src/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/temp/'));
});

gulp.task('Clean', () => {
    return del([
        './dist/*',
    ]);
});

gulp.task('Clean Build', () => {
    return del([
        './dist/temp',
    ]);
});

gulp.task('Bundle CSS', () => {
    return gulp.src('./dist/temp/*.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/'));
});

/* gulp.task('Config Release', async() => {
    return gulp.src([
            './template/*'
        ])
        .pipe(gulp.dest('./dist/'));
}); */

gulp.task('default', gulp.series(['Clean', 'Compile SASS', 'Bundle CSS', 'Clean Build']));