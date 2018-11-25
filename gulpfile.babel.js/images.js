import { src, dest } from 'gulp';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';

import config from './config';
const { pathSrc, pathDest, pathImg } = config;

const images = () =>
  src(`${pathSrc}${pathImg}/**/*`)
    .pipe(
      cache(
        imagemin({
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }],
        }),
      ),
    )
    .pipe(dest(`${pathDest}${pathImg}`));

export default images;
