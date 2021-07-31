import './style.css';
import capricciosa from './images/pizza/capricciosa.jpg';
import hawaiian from './images/pizza/hawaiian.jpg';
import margherita from './images/pizza/margherita.jpg';
import neapolitan from './images/pizza/neapolitan.jpg';
import pepperoni from './images/pizza/pepperoni.jpg';
import quattroFormaggi from './images/pizza/quattro-formaggi.jpg';

//check other projects from odin and ffc for grid
//name variables as html elements
//divide elements on functions

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
