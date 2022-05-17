const skipLink = (skipLinkElem, destination) => {
  skipLinkElem.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(destination).focus();
  });
};

export default skipLink;
