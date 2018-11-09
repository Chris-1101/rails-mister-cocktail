function initScrollToCocktails() {
  const btnCocktails = document.querySelector('.btn-banner:last-child');
  const view_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  
  btnCocktails.addEventListener('click', e => {
    e.preventDefault();
    window.scroll({ top: view_h, left: 0, behavior: 'smooth' });
  });
}

export { initScrollToCocktails };
