import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import UrlParser from '../../routes/url-parser';
import CustomerReviewInitiator from '../../utils/customer-reviews-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import MenuRestaurantInitiator from '../../utils/menu-restaurant-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import HeroHelper from '../../utils/hero-helper';
import InputReviewInitiator from '../../utils/input-review-initiator';

const Detail = {
  async render() {
    return `
      <section class="content"> 
        <article class="restaurant_detail" id="restaurant_detail"></article>
      </section>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('#restaurant_detail');
    const heroContainer = document.querySelector('#hero');

    HeroHelper.hideDisplayHeroElement(heroContainer);
    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    MenuRestaurantInitiator.init({
      foodContainer: document.querySelector('#food_list'),
      drinkContainer: document.querySelector('#drink_list'),
      menuRestaurant: restaurant.menus
    });

    InputReviewInitiator.init({
      btnInputReview: document.querySelector('#btn_input_review'),
      inputReviewBody: document.querySelector('#input_review_body'),
      idRestaurant: restaurant.id,
      name: document.querySelector('#name'),
      review: document.querySelector('#review'),
      btnCancel: document.querySelector('#buttonCancel'),
      btnSend: document.querySelector('#buttonSend')
    });

    CustomerReviewInitiator.init({
      reviewContainer: document.querySelector('#reviews_container'),
      customerReviews: restaurant.customerReviews
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating
      }
    });
  }
};

export default Detail;
