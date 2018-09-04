const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// These 2 tasks can may be re-factored for improved efficiency.
gulp.task('scss', () => {
     gulp.src(['scss/index.scss', './**/*.scss','!node_modules', '!node_modules/**'])
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest("./css"));
});

gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch(['scss/index.scss','./**/*.scss'], ['scss']).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'scss']);