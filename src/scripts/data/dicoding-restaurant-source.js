import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const responseJson = await response.json();
    const { restaurants } = responseJson;

    return restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;

    return restaurant;
  }

  static async insertReview(customerReview) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerReview)
      };

      const response = await fetch(API_ENDPOINT.REVIEW, options);
      const responseJson = await response.json();
      console.log(responseJson.message);
    } catch (error) {
      console.log(error);
    }
  }
}

export default DicodingRestaurantSource;
