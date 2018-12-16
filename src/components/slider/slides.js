import $ from '../../commons/js/selector';
import { defaultClass } from './slider.contants';

import Slider from './slider';
import Contributors from '../contributors/contributors';

const contributors = new Contributors();
const slider = new Slider(contributors);

const apiUrl = 'https://api.github.com/users/axaguildev/repos';

const { classRepository, classNameSlideContainer, templateClass } = defaultClass;

const fetchRepos = async () => fetch(`${apiUrl}`)
  .then(res => res.json())
  .catch(() => console.log('failed'));

class Slides {
  synchronize() {
    this.getCurrentActive();
    this.getRepos();
    this.slidesNode = $(classNameSlideContainer);
  }

  getCurrentActive() {
    this.activeSlide = $(classRepository.item);
    this.activeId = Number(this.activeSlide.getAttribute('data-id'));
  }

  clearSlidesNode() {
    this.slidesNode.innerHTML = '';
  }

  async getRepos() {
    this.repositories = await fetchRepos();
    this.getTemplate();
    this.clearSlidesNode();
    this.addRepos();
    slider.init();
    contributors.init();
  }

  addRepos() {
    this.repositories.forEach((repository) => {
      const cloneTemplate = document.importNode(this.template.content, true);
      const cloneItem = cloneTemplate.querySelector(`.${classRepository.item}`);
      if (this.isActiveRepository(repository.id)) {
        cloneItem.classList.add(classRepository.itemActive);
      }
      cloneItem.setAttribute('data-id', repository.id);
      cloneItem.setAttribute('data-repo', repository.name);
      const cloneTitle = cloneTemplate.querySelector(`.${classRepository.title}`);
      const cloneStars = cloneTemplate.querySelector(`.${classRepository.stars}`);
      const cloneDescription = cloneTemplate.querySelector(`.${classRepository.description}`);
      const cloneMore = cloneTemplate.querySelector(`.${classRepository.more}`);
      cloneTitle.textContent = `${repository.name}`;
      cloneStars.textContent = repository.stargazers_count;
      cloneDescription.textContent = repository.description;
      cloneMore.setAttribute('href', repository.homepage);
      this.slidesNode.appendChild(cloneTemplate);
    });
  }

  isActiveRepository(id) {
    return Number(id) === this.activeId;
  }

  getTemplate() {
    this.template = $(templateClass);
  }
}

export default Slides;
