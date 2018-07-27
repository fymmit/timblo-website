const   gulp = require('gulp'),
        shell = require('gulp-shell')

gulp.task('default', () => {
    console.log('Hello, gulp.');
})

gulp.task('git:pull', shell.task(
    "git pull origin master"
))

gulp.task('build', [ 'git:pull' ], shell.task(
    "cd site && npm run build"
))
