import { series } from 'gulp';

import js from './js';
import sass from './sass';
import pug from './pug';
import images from './images';

export default series(js, sass, pug, images);
