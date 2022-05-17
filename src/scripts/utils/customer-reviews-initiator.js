import { createCustomerReviewTemplate } from '../views/templates/template-creator';

const CustomerReviewsInitiator = {
  async init({ reviewContainer, customerReviews }) {
    this._reviewContainer = reviewContainer;
    this._customerReviews = customerReviews;

    this._renderCustomerReviews();
  },

  async _renderCustomerReviews() {
    const reversedListCustomerReviews = this._customerReviews.reverse();
    for (const review of reversedListCustomerReviews) {
      this._renderReview({
        name: review.name,
        date: review.date,
        review: review.review
      });
    }
  },

  _renderReview({ name, date, review }) {
    this._reviewContainer.innerHTML += createCustomerReviewTemplate({ name, date, review });
  }
};

export default CustomerReviewsInitiator;
