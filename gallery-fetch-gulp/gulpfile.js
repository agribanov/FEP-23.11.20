const { dest, src, parallel, watch, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist/'));
}

function copyJs() {
    return (
        src('./src/**/*.js')
            .pipe(concat('app.js'))
            // .pipe(babel())
            .pipe(uglify())
            .pipe(dest('./dist/'))
    );
}

// function copyVendorsJs() {
//     return src([]).pipe(concat('vendors.js')).pipe(dest('./dist/'));
// }

function copyVendorCss() {
    return src([
        '../common/css/normalize.css',
        '../common/css/skeleton.css',
        '../common/css/dark-theme.css',
    ])
        .pipe(concat('vendors.css'))
        .pipe(dest('./dist'));
}

function copyCss() {
    return src([
        '../common/css/normalize.css',
        '../common/css/skeleton.css',
        '../common/css/dark-theme.css',
        './src/**/*.css',
    ])
        .pipe(concat('styles.css'))
        .pipe(dest('./dist/'));
}

function watchFiles(cb) {
    watch('./src/**/*.js', copyJs);
    watch('./src/**/*.css', copyCss);
    cb();
}

// function server(cb) {
//     browsersync.init({
//         server: {
//             baseDir: './dist',
//         },
//     });

//     watch('./src/**/*.js', series(copyJs, reloadBrowser));
//     watch('./src/**/*.css', series(copyCss, reloadBrowser));
//     cb();
// }

function reloadBrowser(cb) {
    browsersync.reload();
    cb();
}

module.exports.build = parallel(
    copyHtml,
    copyCss,
    // copyVendorsJs,
    copyVendorCss,
    copyJs
);

module.exports.serve = series(
    copyHtml,
    copyCss,
    // copyVendorsJs,
    copyVendorCss,
    copyJs,
    watchFiles
);
