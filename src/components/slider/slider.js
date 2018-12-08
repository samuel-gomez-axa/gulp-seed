//import Hammer from 'hammerjs';
import $ from '../../commons/js/selector';

const classSliderList = '.sg-slider__list';
const classHide = '.sg-slider__list-item--hide';
const classAct = '.sg-slider__list-item--act';
const classPrev = '.sg-slider__list-item--prev';
const classNext = '.sg-slider__list-item--next';
const classSwipe = '.sg-slider__swipe';

class Slider {
  init() {
    const slider = $(classSliderList);
    const swipe = $(classSwipe);
    if (!slider || !swipe) {
      return false;
    }
    console.log('Ok launch SLIDER v2');
  }
}

export default Slider;
