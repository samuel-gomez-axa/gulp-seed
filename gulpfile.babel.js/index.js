import { series } from 'gulp';

import clean from './clean';
import js from './js';
import sass from './sass';
import pug from './pug';
import images from './images';
import sprite from './sprite';
import serve from './serve';

const build = series(clean, sprite, js, sass, pug, images, serve);

export default build;
export { build, clean, js, sass, pug, images, sprite };
