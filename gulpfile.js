const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const nodemon = require('gulp-nodemon');
const uglify = require('gulp-uglify')

function compileCss(){
    return src('./src/**/*.scss')
    .pipe(sass())
    .pipe(dest("public/static/")
    )
}

function startDevServer(){
    nodemon({
        script: './src/server.js',
        env: {'NODE_ENV' : 'development'}
    })
}

function watchTasks(){
    watch(['./src/**/*.scss'], compileCss)
}
function buildProduction(){}

exports.develop = parallel(compileCss, watchTasks, startDevServer)
exports.production = series(compileCss,watchTasks)