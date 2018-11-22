import { series } from 'gulp';
import js from './js';

exports.default = series(js);
