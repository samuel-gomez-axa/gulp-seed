import { series } from 'gulp';

import js from './js';
import style from './style';
import pug from './pug';

export default series(js, style);
