var gulp = require('gulp');
//var uglify = require('gulp-uglify');
var remoteSrc = require('gulp-remote-src');
var electron = require('electron-connect').server.create();
 
gulp.task('assets', function() {
    try {
        remoteSrc(['jquery-3.2.1.js'], {
            base: 'https://code.jquery.com/'
        })
            .pipe(gulp.dest('./app/assets/js'));
    }catch(e){}

    try {
        remoteSrc(['angular.min.js'], {
            base: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/'
        })
            .pipe(gulp.dest('./app/assets/js'));
    }catch(e){}

    try {
        remoteSrc(['jquery.pagepiling.min.js', 'jquery.pagepiling.js'], {
            base: 'https://gist.githubusercontent.com/soluniware/fbe0cdc2a405d80e8c405e6c82bf83e8/raw/722693afe01adb6fd1a73cd733faf90eda5015e8/'
        })
            .pipe(gulp.dest('./app/assets/libs/pagePiling'));
    }catch(e){}

    try {
        remoteSrc(['jquery.pagepiling.css'], {
            base: 'https://gist.githubusercontent.com/soluniware/fbe0cdc2a405d80e8c405e6c82bf83e8/raw/722693afe01adb6fd1a73cd733faf90eda5015e8/'
        })
            .pipe(gulp.dest('./app/assets/libs/pagePiling'));
    }catch(e){}

    try {//Some static resources from Github.com
        remoteSrc(['bg1.jpg'], {
            base: 'https://gist.github.com/soluniware/01385b81ea40b5bebe68ad857becf861/raw/edb1f48b781f3d3f0e979aee899720ad7779b689/'
        })
            .pipe(gulp.dest('./app/sys/theme/page_piling/resources/img/bg1.jpg'));
    }catch(e){}

    try {
        remoteSrc(['bg2.jpg'], {
            base: 'https://gist.github.com/soluniware/01385b81ea40b5bebe68ad857becf861/raw/edb1f48b781f3d3f0e979aee899720ad7779b689/'
        })
            .pipe(gulp.dest('./app/sys/theme/page_piling/resources/img/bg2.jpg'));
    }catch(e){}

    try {
        remoteSrc(['bg3.jpg'], {
            base: 'https://gist.github.com/soluniware/01385b81ea40b5bebe68ad857becf861/raw/edb1f48b781f3d3f0e979aee899720ad7779b689/'
        })
            .pipe(gulp.dest('./app/sys/theme/page_piling/resources/img/bg3.jpg'));
    }catch(e){}

    try {
        remoteSrc(['flowers.mp4'], {
            base: 'https://gist.github.com/soluniware/30d709e0d20a96dd996d3d3d6e7f0d56/raw/c8d6e4e6dc268248bf937d472929b6147cc027dd/'
        })
            .pipe(gulp.dest('./app/sys/theme/page_piling/resources/img/flowers.mp4'));
    }catch(e){}

    try {
        remoteSrc(['angular-indexed-db.js'], {
            base: 'https://raw.githubusercontent.com/bramski/angular-indexedDB/master/'
        })
            .pipe(gulp.dest('./app/shared/services/angular-indexed-db'));
    }catch(e){}
});

gulp.task('serve', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch(['./app/main.js', './app/package.json'], electron.restart);

    // Reload renderer process
    gulp.watch(['./app/index.html', './app/apps/*', './app/assets/*'], electron.reload);
});