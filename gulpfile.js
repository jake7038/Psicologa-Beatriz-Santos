var gulp = require('gulp');
const imagemin = require('gulp-imagemin'); 


function comprimirimagem(){
    return gulp.src('./img/mensagens-de-zap/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/mensagens-de-zap'));
}

exports.comprimirimagem = comprimirimagem;