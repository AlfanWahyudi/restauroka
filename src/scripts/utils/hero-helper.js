const HeroHelper = {
  async showDisplayHeroElement(heroContainer) {
    heroContainer.style.display = 'flex';
  },

  async hideDisplayHeroElement(heroContainer) {
    heroContainer.style.display = 'none';
  }
};

export default HeroHelper;
