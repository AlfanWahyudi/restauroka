import CONFIG from '../../globals/config';

const createListFoodTemplate = (food) => `<li>${food}</li>`;

const createListDrinkTemplate = (drink) => `<li>${drink}</li>`;

const createCustomerReviewTemplate = ({ name, date, review }) => `
  <article class="customer_review">
    <h3>${name}</h3>
    <time>${date}</time>
    <p>${review}</p>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <section class="main_detail">
      <img class="poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="Gambar restoran ${restaurant.name}">
      <div class="restaurant_info">
        <h2>${restaurant.name}</h2>
        <span>Rating ${restaurant.rating}</span>
        <p>${restaurant.city} City</p>
        <p>${restaurant.address}</p>
        <p>${restaurant.description}</p>
      </div>
    </section>
    <section class="menus">
      <h2>Our Menus</h2>
      <article class="foods">
        <h3>foods</h3>
        <ol id="food_list"></ol>
      </article>
      <article class="drinks">
        <h3>Drinks</h3>
        <ol id="drink_list"></ol>
      </article>
    </section>
    <section class="customers_reviews">
      <h2>Customers Review</h2>
      <button id="btn_input_review">Add Review</button>
      <div class="input_review_body" id="input_review_body">
        <div class="form-group">
        <input type="text" name="name" id="name" placeHolder="Name" required>
        </div>
        <div class="form-group">
        <textarea name="review" id="review" rows="1" placeholder="Write some review ..." required></textarea>
        </div>
        <div class="form-group btn-group">
          <button id="buttonCancel">Cancel</button>
          <button id="buttonSend" name="submit" type="submit">Send</button>
        </div>
      </div>
      <div class="reviews_container" id="reviews_container"></div>
    </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article tabindex="0" class="restaurant" aria-label="restaurant ${restaurant.name}">
        <img  class="restaurant__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="gambar restoran di kota ${restaurant.city}">
        <div class="restaurant__content">
            <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
            <p tabindex="0" class="restaurant__description">${restaurant.description}</p>
            <div tabindex="0" tabindex="0" class="restaurant__info">
                <i class="fas fa-star rating-icon"></i>
                <span class="rating">${restaurant.rating}</span>
                <span class="vertical_gap"></span>
                <span class="city__name">${restaurant.city} City</span>
            </div>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createListFoodTemplate, createListDrinkTemplate,
  createCustomerReviewTemplate, createRestaurantDetailTemplate,
  createRestaurantItemTemplate, createUnlikeRestaurantButtonTemplate,
  createLikeRestaurantButtonTemplate
};
