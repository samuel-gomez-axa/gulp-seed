import Slides from './components/slider/slides';

const slides = new Slides();

document.addEventListener('DOMContentLoaded', () => {
  slides.synchronize();
});
