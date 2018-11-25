import { src, dest } from 'gulp';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
sass.compiler = require('node-sass');

import config from './config';
const { pathSrc, pathDest } = config;

const sassTsk = () =>
  src(`${pathSrc}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(dest(pathDest));

export default sassTsk;
