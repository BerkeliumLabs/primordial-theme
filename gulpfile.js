import gulp from 'gulp';
import * as del from 'del';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';

gulp.task('Clean', () => {
    return del.deleteAsync([
        './dist/*',
    ]);
});

gulp.task('Bundle CSS', () => {
    return gulp.src('./build/*.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('Copy Fonts', () => {
    return gulp.src('./assets/fonts/*')
        .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('Clean Build', () => {
    return del.deleteAsync([
        './Build/*',
    ]);
});

gulp.task('default', gulp.series(['Clean', 'Bundle CSS', 'Copy Fonts', 'Clean Build']));