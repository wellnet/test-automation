var gulp = require('gulp'),
    Server = require('karma').Server,
    protractor = require("gulp-protractor").protractor;
 
gulp.task('protractor', function(callback) {
  gulp
    .src(['example_spec.js'])
    .pipe(protractor({
        'configFile': 'protractor.conf.js'
    }))
    .on('error', function(e) {
        console.log(e);
    })
    .on('end', callback);
});


gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});


