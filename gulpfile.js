const   gulp = require('gulp'),
        shell = require('gulp-shell')

gulp.task('default', () => {
    console.log('Hello, gulp.');
})

gulp.task('git:pull', shell.task(
    "git pull origin master"
))
