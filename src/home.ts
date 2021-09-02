import './home.scss';
import pizzeria from './images/pizzeria.jpg';
export { home };

const home = () => {
  const div = document.createElement('div');

  const img = new Image();
  img.src = pizzeria;
  img.id = 'pizzeria';
  div.appendChild(img);

  const h1 = document.createElement('h1');
  h1.textContent = 'THE BEST NEW YORK STYLE PIZZA AROUND!';
  div.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'The Russo family has been serving up the best New York Style Pizza and authentic Italian cuisine for years. Our recipes have been passed down from generation to generation all the way from Naples and Sicily. Russo’s mission is to serve New York style pizza and authentic Italian food worldwide so that no matter your location, you’ll be able to enjoy the delicious, traditional Russo family recipes.';
  div.appendChild(p);

  return div;
};
