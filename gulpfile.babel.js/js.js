import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

const js = () =>
  src('./src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dist'));

export default js;
