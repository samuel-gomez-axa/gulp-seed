import { src, dest } from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

import config from './config';
const { pathSrc, pathDest } = config;

const js = () =>
  src(`${pathSrc}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: 'amd',
            },
          ],
        ],
      }),
    )
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest(pathDest));

export default js;
