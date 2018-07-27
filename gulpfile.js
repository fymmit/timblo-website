const   gulp = require('gulp'),
        shell = require('gulp-shell')

gulp.task('default', () => {
    console.log('Hello, gulp.');
})

gulp.task('git:pull', shell.task(
    "git pull origin master"
))

gulp.task('install', [ 'git:pull' ], shell.task(
    "cd site && npm i"
))

gulp.task('build', [ 'install' ], shell.task(
    "cd site && npm run build"
))

gulp.task('publish', [ 'build' ], shell.task(
    "cp -r site/dist/./ /var/www/html"
))
