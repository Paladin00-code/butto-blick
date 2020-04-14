let gulp = require('gulp'),
    sass = require('gulp-sass'),
    var browserSync = require('browser-sync').create();

gulp.task('scss', function() {// трансформирует .SASS и .SCSS в .CSS
    return gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function(){
    gulp.watch('./css/*.scss', gulp.parallel('scss'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))