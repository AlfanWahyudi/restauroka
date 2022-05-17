import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@fortawesome/fontawesome-free/js/fontawesome.min';
import '@fortawesome/fontawesome-free/js/regular.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import App from './views/app';
import swRegister from './utils/sw-register';

library.add(faStar, faHeart, faFacebook, faInstagram, faTwitter);

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', () => {
  app.renderpage();
});

window.addEventListener('load', () => {
  app.renderpage();
  swRegister();
});
