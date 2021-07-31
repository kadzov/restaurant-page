import './style.css';
import logo from './images/logo.jpg';
import pizzeria from './images/pizzeria.jpg';
(() => {
  const img = new Image();
  img.src = logo;
  img.id = 'logo';
  content.appendChild(img);
})();
(() => {
  const nav = document.createElement('nav');

  const home = document.createElement('a');
  home.textContent = 'HOME';
  nav.appendChild(home);

  const menu = document.createElement('a');
  menu.textContent = 'MENU';
  nav.appendChild(menu);

  const location = document.createElement('a');
  location.textContent = 'LOCATION';
  nav.appendChild(location);

  content.appendChild(nav);
})();
(() => {
  const img = new Image();
  img.src = pizzeria;
  img.id = 'pizzeria';
  content.appendChild(img);
})();
(() => {
  const h1 = document.createElement('h1');
  h1.textContent = 'THE BEST NEW YORK STYLE PIZZA AROUND!';
  content.appendChild(h1);
})();
(() => {
  const p = document.createElement('p');
  p.textContent = 'The Russo family has been serving up the best New York Style Pizza and authentic Italian cuisine for years. Our recipes have been passed down from generation to generation all the way from Naples and Sicily. Russo’s mission is to serve New York style pizza and authentic Italian food worldwide so that no matter your location, you’ll be able to enjoy the delicious, traditional Russo family recipes.';
  content.appendChild(p);
})();
