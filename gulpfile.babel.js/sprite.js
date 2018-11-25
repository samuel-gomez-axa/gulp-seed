import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import { reload } from './serve';
import config from './config';
const { pathSrc, pathDest, pathSvg, svgFiles } = config;

const sprite = () =>
  src(`${pathSrc}${pathSvg}${svgFiles}`)
    .pipe(
      svgSprite({
        shape: {
          dimension: {
            maxWidth: 32,
            maxHeight: 32,
          },
        },
        mode: {
          view: {
            dest: 'sprite',
            render: {
              scss: true,
            },
          },
        },
      }),
    )
    .pipe(dest(`${pathSrc}/assets`))
    .pipe(reload({ stream: true }));

export default sprite;
