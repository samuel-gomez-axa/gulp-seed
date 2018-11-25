import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import fs from 'fs';

import config from './config';
const { pathSrc, pathDest } = config;

const base = JSON.parse(fs.readFileSync('./src/data/base.json'));
const general = JSON.parse(fs.readFileSync('./src/data/general.json'));
const menu = JSON.parse(fs.readFileSync('./src/data/menu.json'));
const home = JSON.parse(fs.readFileSync('./src/data/home.json'));

const basedir = './';

var data = { base, general, menu, home, basedir };

const pugTsk = () =>
  src(`${pathSrc}/*.pug`)
    .pipe(
      pug({
        locals: data,
        pretty: true,
      }),
    )
    .pipe(dest(pathDest));

export default pugTsk;
