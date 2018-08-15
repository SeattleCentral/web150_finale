let gulp = require('gulp'),
    rollup = require('rollup-stream'),
    source = require('vinyl-source-stream'),
    babel = require('rollup-plugin-babel');
    
gulp.task('build', function() {
    return rollup({
        input: 'js/app.js',
        format: 'es',
        plugins: [babel()]
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./js/build'));
});

gulp.task('default', function() {
    gulp.watch('js/*.js', ['build']);
    gulp.watch('js/validators/*.js', ['build']);
});