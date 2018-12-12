import {lory} from 'lory.js';
import $ from '../../commons/js/selector';

const defaultClass = {
  classSlider: 'js-slider',
  classNameFrame : 'js-slider__frame',
  classNameSlideContainer : 'js-slider__list',
  classSliderListItem : 'js-slider__list-item',
  classNamePrevCtrl: 'js-slider__prev',
  classNameNextCtrl: 'js-slider__next',
  classNameActiveSlide: 'js-slider__list-item--active'
}

const defaultOptions = {
  infinite: 1,
  enableMouseEvents: true
}

class Slider {
  constructor(options = {}, classOptions = {}){
    const newClassOptions = Object.assign(defaultClass, classOptions);
    const { classSlider, classNameFrame, classNameSlideContainer, classNamePrevCtrl, classNameNextCtrl, classNameActiveSlide} = newClassOptions;
    const optionsSelectors = {
      classNameFrame,
      classNameSlideContainer,
      classNamePrevCtrl,
      classNameNextCtrl,
      classNameActiveSlide
    }
    const optionsSlider = Object.assign(defaultOptions, optionsSelectors, options);
    this.slider = $(classSlider);
    this.optionsSlider = optionsSlider;
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    lory(this.slider, this.optionsSlider);
  }

  isNotExitingElement() {
    return !this.slider;
  }

}

export default Slider;
