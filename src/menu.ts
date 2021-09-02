import './menu.scss';
import Capricciosa from './images/pizza/capricciosa.jpg';
import Hawaiian from './images/pizza/hawaiian.jpg';
import Margherita from './images/pizza/margherita.jpg';
import Neapolitan from './images/pizza/neapolitan.jpg';
import Pepperoni from './images/pizza/pepperoni.jpg';
import QuattroFormaggi from './images/pizza/quattro-formaggi.jpg';
export { menu };
// //check other projects from odin and ffc for grid

const menu = () => {
  const div = document.createElement('div');

  const capricciosa = () => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Capricciosa';
    section.appendChild(h2);

    const img = new Image();
    img.src = Capricciosa;
    section.appendChild(img);

    return section;
  };
  div.appendChild(capricciosa());

  const hawaiian = () => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Hawaiian';
    section.appendChild(h2);

    const img = new Image();
    img.src = Hawaiian;
    section.appendChild(img);

    return section;
  };
  div.appendChild(hawaiian());
  const margherita = () => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Margherita';
    section.appendChild(h2);

    const img = new Image();
    img.src = Margherita;
    section.appendChild(img);

    return section;
  };
  div.appendChild(margherita());
  const neapolitan = () => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Neapolitan';
    section.appendChild(h2);

    const img = new Image();
    img.src = Neapolitan;
    section.appendChild(img);

    return section;
  };
  div.appendChild(neapolitan());
  const pepperoni = () => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Pepperoni';
    section.appendChild(h2);

    const img = new Image();
    img.src = Pepperoni;
    section.appendChild(img);

    return section;
  };
  div.appendChild(pepperoni());
  const quattroFormaggi = () => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'QuattroFormaggi';
    section.appendChild(h2);

    const img = new Image();
    img.src = QuattroFormaggi;
    section.appendChild(img);

    return section;
  };
  div.appendChild(quattroFormaggi());

  return div;
};