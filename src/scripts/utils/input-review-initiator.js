import DicodingRestaurantSource from '../data/dicoding-restaurant-source';

const InputReviewInitiator = {
  init({
    btnInputReview, inputReviewBody, idRestaurant,
    name, review, btnCancel, btnSend
  }) {
    btnInputReview.addEventListener('click', (event) => {
      this._toggleInputReview(event, inputReviewBody);
      this._setDisplayBtnInputReview(btnInputReview, 'none');
    });

    btnCancel.addEventListener('click', (event) => {
      this._closeInputReview(event, inputReviewBody);
      this._setDisplayBtnInputReview(btnInputReview, 'block');
      this._resetInputReview(name, review);
    });

    btnSend.addEventListener('click', async (event) => {
      const customerReview = {
        id: idRestaurant,
        name: name.value,
        review: review.value
      };

      if ((name.value !== '') && (review.value !== '')) {
        this._closeInputReview(event, inputReviewBody);
        this._setDisplayBtnInputReview(btnInputReview, 'block');
        this._resetInputReview(name, review);
        await DicodingRestaurantSource.insertReview(customerReview);
      }
    });
  },

  _setDisplayBtnInputReview(btnInputReview, display) {
    btnInputReview.style.display = display;
  },

  _toggleInputReview(event, inputReviewBody) {
    event.stopPropagation();
    inputReviewBody.style.display = 'flex';
  },

  _closeInputReview(event, inputReviewBody) {
    event.stopPropagation();
    inputReviewBody.style.display = 'none';
  },

  _resetInputReview(name, review) {
    name.value = '';
    review.value = '';
  }
};

export default InputReviewInitiator;
