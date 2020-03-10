---
lang: "fr"
path: "/react-toolkit"
date: "2019-11-16"
title: "Slash Design System"
tags: ["repo", "design-system", "slash", "storybook"]
modifier: "repository"
meta: {
  title: "Slash Design System",
  description: "Description Slash Design System",
  keywords: "Slash Design System, Axa Design System"
}
---

<section class="grid-2-small-1 af-post__section">
  <img class="af-post__img af-post__img--left" src="../../slash-design-system.jpg" alt="slash-design-system" />
  <article class="af-post__article af-post__article--left">
    <h2 class="af-post__subtitle af-post__subtitle--left">A quoi sert «Slash Design System» ?</h2>
    <p class="af-post__content">Comme son nom l’indique, il s’agit d’un Design System, cet outil a été développé pour des besoins internes sur l’homogénisation des développpements front-end des applications métiers. Il permet de définir les guidelines UX et les règles de parcours utilisateurs.</p>
  </article>
</section>
<section class="grid-2-small-1 af-post__section">
  <article class="af-post__article af-post__article--right">
    <h2 class="af-post__subtitle af-post__subtitle--right">A qui se destine ce Design System ?</h2>
    <p class="af-post__content">Ce réferentiel est à destination des développeurs, des UX mais aussi aux autres membres de la famille Produit comme les PO, les PM ainsi que les utilisateurs finaux.</p>
  </article>
  <img class="af-post__img af-post__img--right" src="../../users-design-system.jpg" alt="users-design-system" />
</section>
<section class="grid-2-small-1 af-post__section">
  <img class="af-post__img af-post__img--left" src="../../computer.jpg" alt="computer" />
  <article class="af-post__article af-post__article--left">
    <h2 class="af-post__subtitle af-post__subtitle--left">Quelles technologies sont utilisées ?</h2>
    <p class="af-post__content">Slash Design System est ensemble de composants indépendants (packages) via un mono-repository . 
Cela a été possible grâce à <a class="af-post__link af-post__link--external" href="https://lerna.js.org/">Lerna</a> qui permet de développer du multi-packages sur un seul repository.<br/>Le Design System se décompose en 2 parties documentée : HTML/CSS pour le graphisme et Javascript pour l’interaction.<br/>La documentation HTML/CSS est générée par le moteur de templating <a class="af-post__link af-post__link--external" href="https://pugjs.org/">Pug</a>, ainsi que le préprocesseur <a class="af-post__link af-post__link--external" href="https://sass-lang.com/">Sass</a> pour la génération CSS.<br />Pour la partie Javascript, les composants ont été développés avec la librairie <a class="af-post__link af-post__link--external" href="https://reactjs.org/">ReactJS</a>, la documentation est générée à l’aide de l’outil <a class="af-post__link af-post__link--external" href="https://storybook.js.org/">Storybook</a> afin d’avoir une documenation plus interactive.</p>
  </article>
</section>
