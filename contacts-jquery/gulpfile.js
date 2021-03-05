const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function cleanDist() {
    return src('./dist', { read: false }).pipe(clean());
}

function copyHtml() {
    console.log('copying html');
    return src('./src/index.html').pipe(dest('./dist'));
}

function copyJs() {
    console.log('copying js');
    return src('./src/**/*.js').pipe(concat('all.js')).pipe(dest('./dist'));
}

function copyVendorJs() {
    return src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(concat('vendor.js'))
        .pipe(dest('./dist'));
}

function watchFiles() {
    watch('./src/**/*.js', { events: 'all' }, copyJs);
}

module.exports = {
    build: series(cleanDist, parallel(copyJs, copyVendorJs, copyHtml)),
    serve: series(
        cleanDist,
        parallel(copyJs, copyVendorJs, copyHtml),
        watchFiles
    ),
};
