import './style.css';
import logo from './images/logo.jpg';
import pizzeria from './images/pizzeria.jpg';

(() => {
  const img = new Image();
  img.src = logo;
  img.id = 'logo';
  content.appendChild(img);
  const img2 = new Image();
  img2.src = pizzeria;
  img2.id = 'pizzeria';
  content.appendChild(img2);
  const header = document.createElement('h1');
  header.textContent = 'THE BEST NEW YORK STYLE PIZZA AROUND!';
  content.appendChild(header);
  const description = document.createElement('p');
  description.textContent = 'The Russo family has been serving up the best New York Style Pizza and authentic Italian cuisine for years. Our recipes have been passed down from generation to generation all the way from Naples and Sicily. Russo’s mission is to serve New York style pizza and authentic Italian food worldwide so that no matter your location, you’ll be able to enjoy the delicious, traditional Russo family recipes.';
  content.appendChild(description);
})();

//check other projects from odin and ffc for grid
