import { dest, series } from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import log from 'gulplog';
import uglify from 'gulp-uglify';
import { reload } from './serve';
import config from './config';
const { pathSrc, pathDest } = config;


export const js = () => {
  var b = watchify(
    browserify({
      entries: `${pathSrc}/index.js`,
      debug: true
    })
  );

  return b
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .on('error', log.error)
    .pipe(sourcemaps.write())
    .pipe(dest(`${pathDest}`))
    .pipe(reload({ stream: true }));
};

export default series(js);
