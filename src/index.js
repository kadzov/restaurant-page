import './style.css';

import logo from './images/logo.jpg';
import pizzeria from './images/pizzeria.jpg';
import capricciosa from './images/pizza/capricciosa.jpg';
import hawaiian from './images/pizza/hawaiian.jpg';
import margherita from './images/pizza/margherita.jpg';
import neapolitan from './images/pizza/neapolitan.jpg';
import pepperoni from './images/pizza/pepperoni.jpg';
import quattroFormaggi from './images/pizza/quattro-formaggi.jpg';

(() => {
  const img = new Image();
  img.src = logo;
  img.id = 'logo'
  content.appendChild(img);
  const img2 = new Image();
  img2.src = pizzeria;
  img2.id = 'pizzeria'
  content.appendChild(img2);
  const header = document.createElement('h1');
  header.textContent = 'THE BEST NEW YORK STYLE PIZZA AROUND!';
  content.appendChild(header);
  const description = document.createElement('p');
  description.textContent = 'The Russo family has been serving up the best New York Style Pizza and authentic Italian cuisine for years. Our recipes have been passed down from generation to generation all the way from Naples and Sicily. Russo’s mission is to serve New York style pizza and authentic Italian food worldwide so that no matter your location, you’ll be able to enjoy the delicious, traditional Russo family recipes.';
  content.appendChild(description);
})();

const assortment = document.createElement('div');
assortment.id = 'assortment';
content.appendChild(assortment);

(() => {
  const container = document.createElement('div');
  assortment.appendChild(container);
  const name = document.createElement('h2');
  name.textContent = 'Capricciosa';
  container.appendChild(name);
  const img = new Image();
  img.src = capricciosa;
  container.appendChild(img);
})();
(() => {
  const container = document.createElement('div');
  assortment.appendChild(container);
  const name = document.createElement('h2');
  name.textContent = 'Hawaiian';
  container.appendChild(name);
  const img = new Image();
  img.src = hawaiian;
  container.appendChild(img);
})();
(() => {
  const container = document.createElement('div');
  assortment.appendChild(container);
  const name = document.createElement('h2');
  name.textContent = 'Margherita';
  container.appendChild(name);
  const img = new Image();
  img.src = margherita;
  container.appendChild(img);
})();
(() => {
  const container = document.createElement('div');
  assortment.appendChild(container);
  const name = document.createElement('h2');
  name.textContent = 'Neapolitan';
  container.appendChild(name);
  const img = new Image();
  img.src = neapolitan;
  container.appendChild(img);
})();
(() => {
  const container = document.createElement('div');
  assortment.appendChild(container);
  const name = document.createElement('h2');
  name.textContent = 'Pepperoni';
  container.appendChild(name);
  const img = new Image();
  img.src = pepperoni;
  container.appendChild(img);
})();
(() => {
  const container = document.createElement('div');
  assortment.appendChild(container);
  const name = document.createElement('h2');
  name.textContent = 'Quattro Formaggi';
  container.appendChild(name);
  const img = new Image();
  img.src = quattroFormaggi;
  container.appendChild(img);
})();
