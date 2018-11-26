import { series } from 'gulp';

import clean from './clean';
import js from './js';
import sassDev, { sassBuild } from './sass';
import pug from './pug';
import images from './images';
import sprite from './sprite';
import serve from './serve';

const build = series(clean, js, sassBuild, sprite, pug, images);
const dev = series(clean, js, sassDev, pug, images, serve);

export default build;
export { dev, build, clean, js, sassBuild, sassDev, pug, images, sprite };
