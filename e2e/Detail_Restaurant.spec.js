const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  I.see(firstRestaurantTitle, '.restaurants');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Feature('Unliking A Restaurant');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unlike one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('The Restaurant You Like', '.content__label');
  I.seeElement('.restaurant');
  I.seeElement('.restaurant__title');

  const restaurant = locate('.restaurant__title a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee(restaurantTitle, '.restaurants');
});

Feature('Review A Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Display customers review body', ({ I }) => {
  I.seeElement('.restaurant__title a');

  I.click(locate('.restaurant__title a').first());
  I.seeElement('.customers_reviews');

  I.click('#btn_input_review');
  I.seeElement('.input_review_body');
});

Scenario('Insert one review', ({ I }) => {
  const customername = 'Andi';
  const customerReview = 'Tidak ada yang direview';

  I.seeElement('.restaurant__title a');

  I.click(locate('.restaurant__title a').first());
  I.seeElement('.customers_reviews');

  I.click('#btn_input_review');
  I.seeElement('.input_review_body');

  I.fillField('name', customername);
  I.fillField('review', customerReview);
  I.click('Send', '#buttonSend');
  I.wait(2);

  I.refreshPage();
  I.dontSee('.input_review_body');

  I.see(customername, '.customer_review h3');
  I.see(customerReview, '.customer_review p');
});

Scenario('Cancel restaurant review', ({ I }) => {
  I.seeElement('.restaurant__title a');

  I.click(locate('.restaurant__title a').first());
  I.seeElement('.customers_reviews');

  I.click('#btn_input_review');
  I.seeElement('.input_review_body');

  I.click('Cancel', '#buttonCancel');
  I.dontSee('.input_review_body');
});

Scenario('Cannot Insert a blank review of restaurant', ({ I }) => {
  I.seeElement('.restaurant__title a');

  I.click(locate('.restaurant__title a').first());
  I.seeElement('.customers_reviews');

  I.click('#btn_input_review');
  I.seeElement('.input_review_body');

  I.click('Send');
  I.seeElement('.input_review_body');
});
