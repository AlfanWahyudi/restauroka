import { createListFoodTemplate, createListDrinkTemplate } from '../views/templates/template-creator';

const MenuRestaurantInitiator = {
  async init({ foodContainer, drinkContainer, menuRestaurant }) {
    this._foodContainer = foodContainer;
    this._drinkContainer = drinkContainer;
    this._menuRestaurant = menuRestaurant;

    this._renderMenus();
  },

  async _renderMenus() {
    const { foods, drinks } = this._menuRestaurant;

    this._renderFoods(foods);
    this._renderDrinks(drinks);
  },

  _renderFoods(foods) {
    for (const food of foods) {
      this._foodContainer.innerHTML += createListFoodTemplate(food.name);
    }
  },

  _renderDrinks(drinks) {
    for (const drink of drinks) {
      this._drinkContainer.innerHTML += createListDrinkTemplate(drink.name);
    }
  }
};

export default MenuRestaurantInitiator;
