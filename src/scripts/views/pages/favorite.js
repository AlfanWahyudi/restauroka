import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import HeroHelper from '../../utils/hero-helper';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__label">The Restaurant You Like</h2>
        <div class="restaurants" id="restaurants"></div>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    const heroContainer = document.querySelector('#hero');

    HeroHelper.hideDisplayHeroElement(heroContainer);
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default Favorite;
