"use strict";

const gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
    imageminUPNG = require("imagemin-upng"),
    mozjpeg = require('imagemin-mozjpeg'),
    jpegRecompress = require('imagemin-jpeg-recompress'),
    svgo = require('imagemin-svgo');



/*--------------------------------
    Image Optimization
----------------------------------*/
function imgmin(done) {
    gulp.src('./assets/main-img/**/*')
        .pipe(imagemin(
            [imageminUPNG(), mozjpeg(), jpegRecompress(), svgo()],
            {verbose: true}
        ))
        .pipe(gulp.dest('./assets/optimize-img/'));
    done();
};

gulp.task("default", imgmin);