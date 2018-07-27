const gulp = require('gulp')

gulp.task('default', () => {
    console.log('Hello, gulp.');
})

gulp.task('git:pull', shell.task(
    "git pull origin master"
))
