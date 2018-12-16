import $ from '../../commons/js/selector';

const activeSlideClass = 'js-slider__list-item--active';
const templateClass = 'js-contributorTmpl';
const contributorsClass = 'js-contributors';
const contributorNameClass = 'js-contributor__name';
const contributorAvatarClass = 'js-contributor__avatar';
const apiUrl = 'https://api.github.com/repos/AxaGuilDEv/';

class Contributors {
  init() {
    this.activeSlide = $(activeSlideClass);
    if (!this.activeSlide) {
      return;
    }
    this.activeRepo = this.activeSlide.getAttribute('data-repo');
    this.activeId = this.activeSlide.getAttribute('data-id');
    this.contributorsNode = $(contributorsClass);
    this.getContributors();
  }

  loaderContributorsNode() {
    this.contributorsNode.innerHTML = 'Chargement...';
  }

  clearContributorsNode() {
    this.contributorsNode.innerHTML = '';
  }

  async getContributors() {
    this.loaderContributorsNode();
    this.contributors = await this.fetchContributors();
    this.clearContributorsNode();
    this.getTemplate();
    this.addContributors();
  }

  addContributors() {
    this.contributors.forEach((contributor) => {
      const cloneTemplate = document.importNode(this.template.content, true);
      const cloneName = cloneTemplate.querySelector(`.${contributorNameClass}`);
      const cloneAvatar = cloneTemplate.querySelector(`.${contributorAvatarClass}`);
      cloneName.textContent = contributor.login;
      cloneAvatar.setAttribute('src', contributor.avatar_url);
      this.contributorsNode.appendChild(cloneTemplate);
    });
  }

  getTemplate() {
    this.template = $(templateClass);
  }

  async fetchContributors() {
    return fetch(`${apiUrl}${this.activeRepo}/contributors`)
      .then(res => res.json())
      .catch(() => console.log('failed fetch contributors'));
  }
}

export default Contributors;
