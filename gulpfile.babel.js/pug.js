import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import fs from 'fs';
import { reload } from './serve';
import config from './config';
const { pathSrc, pathDest, pugFiles } = config;

const basedir = './';

const pugTsk = () => {
  const base = JSON.parse(fs.readFileSync('./src/data/base.json'));
  const general = JSON.parse(fs.readFileSync('./src/data/general.json'));
  const menu = JSON.parse(fs.readFileSync('./src/data/menu.json'));
  const home = JSON.parse(fs.readFileSync('./src/data/home.json'));

  const data = { base, general, menu, home, basedir };

  return src(`${pathSrc}${pugFiles}`)
    .pipe(
      pug({
        locals: data,
        pretty: true,
      }),
    )
    .pipe(dest(pathDest))
    .pipe(reload({ stream: true }));
};

export default pugTsk;
