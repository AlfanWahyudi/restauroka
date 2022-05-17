import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import HeroHelper from '../../utils/hero-helper';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
      <h2 class="content__label">You Might Like It</h2>
      <div class="restaurants" id="restaurants"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const heroContainer = document.querySelector('#hero');

    HeroHelper.showDisplayHeroElement(heroContainer);
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default Home;
