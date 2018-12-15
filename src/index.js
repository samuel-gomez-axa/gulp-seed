import Slider from './components/slider/slider';
import Contributors from './components/contributors/contributors';

const contributors = new Contributors();
const slider = new Slider(contributors);

document.addEventListener('DOMContentLoaded', () => {
  slider.init();
  contributors.init();
});
