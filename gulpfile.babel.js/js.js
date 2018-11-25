import { src, dest, series } from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import { reload } from './serve';
import config from './config';
const { pathSrc, pathDest, jsFiles } = config;

const jsTemp = () =>
  src(`${pathSrc}${jsFiles}`)
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(dest(`${pathDest}`));

const js = () =>
  watchify(
    browserify({
      entries: `${pathDest}/bundle.js`,
      debug: true,
    }),
  )
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest(`${pathDest}`))
    .pipe(reload({ stream: true }));

export default series(jsTemp, js);
