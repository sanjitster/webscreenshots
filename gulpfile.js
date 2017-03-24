var gulp = require('gulp'),
    fs = require('fs-extra'),
    parsePath = require('parse-filepath'),
    del = require('del'),
    webshot = require('webshot');

// Config File
var config = JSON.parse(fs.readFileSync('config.json'));

// Clean screens directory
gulp.task('clean:screens', function () {
    del.sync(['screens/']);
});

// Build screenshots from extrasmall devices (<768px)
gulp.task('screens:extrasmall', function () {
    var options = {
        screenSize: {
            width: 375,
            // height: 600
        },
        shotSize: {
            width: 375,
            height: 'all'
        }
    };
    var f = parsePath(config.url);
    if (f.extname === '.html') {
        webshot(
            config.url,
            'screens/extrasmall-device-375.jpg',
            options,
            function () { //err
                // console.log(err);
            }
        );
    }
});

// Build screenshots from small devices (≥768px)
gulp.task('screens:small', function () {
    var options = {
        screenSize: {
            width: 768,
            // height: 600
        },
        shotSize: {
            width: 768,
            height: 'all'
        }
    };
    var f = parsePath(config.url);
    if (f.extname === '.html') {
        webshot(
            config.url,
            'screens/small-device-768.jpg',
            options,
            function () { //err
                // console.log(err);
            }
        );
    }
});

// Build screenshots from medium devices (≥992px)
gulp.task('screens:medium', function () {
    var options = {
        screenSize: {
            width: 992  ,
            // height: 600
        },
        shotSize: {
            width: 992,
            height: 'all'
        }
    };
    var f = parsePath(config.url);
    if (f.extname === '.html') {
        webshot(
            config.url,
            'screens/medium-device-992.jpg',
            options,
            function () { //err
                // console.log(err);
            }
        );
    }
});

// Build screenshots from large devices (≥1200px)
gulp.task('screens:large', function () {
    var options = {
        screenSize: {
            width: 1200,
            // height: 600
        },
        shotSize: {
            width: 1200,
            height: 'all'
        }
    };
    var f = parsePath(config.url);
    if (f.extname === '.html') {
        webshot(
            config.url,
            'screens/large-device-1200.jpg',
            options,
            function () { //err
                // console.log(err);
            }
        );
    }
});

// Build screenshots from web into public folder
gulp.task('screenshots', ['clean:screens', 'screens:extrasmall', 'screens:small', 'screens:medium', 'screens:large']);

// Default gulp tasks
gulp.task('default', ['screenshots']);