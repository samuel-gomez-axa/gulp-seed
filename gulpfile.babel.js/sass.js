import { src, dest } from 'gulp';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import minifyCSS from 'gulp-csso';
sass.compiler = require('node-sass');

import { reload } from './serve';
import config from './config';
const { pathSrc, pathDest, sassFiles } = config;

const sassTsk = () =>
  src(`${pathSrc}${sassFiles}`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(minifyCSS())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(dest(pathDest))
    .pipe(reload({ stream: true }));

export default sassTsk;
