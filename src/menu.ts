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
    div.appendChild(section);

    const h2 = document.createElement('h2');
    h2.textContent = 'Capricciosa';
    section.appendChild(h2);

    const img = new Image();
    img.src = Capricciosa;
    section.appendChild(img);

    return div;
  };

  return capricciosa();
};

// (() => {
//   const div = document.createElement('div');
//   content.appendChild(div);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'Hawaiian';
//   div.appendChild(h2);

//   const img = new Image();
//   img.src = hawaiian;
//   div.appendChild(img);
// })();

// (() => {
//   const div = document.createElement('div');
//   content.appendChild(div);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'Margherita';
//   div.appendChild(h2);

//   const img = new Image();
//   img.src = margherita;
//   div.appendChild(img);
// })();

// (() => {
//   const div = document.createElement('div');
//   content.appendChild(div);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'Neapolitan';
//   div.appendChild(h2);

//   const img = new Image();
//   img.src = neapolitan;
//   div.appendChild(img);
// })();

// (() => {
//   const div = document.createElement('div');
//   content.appendChild(div);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'Pepperoni';
//   div.appendChild(h2);

//   const img = new Image();
//   img.src = pepperoni;
//   div.appendChild(img);
// })();

// (() => {
//   const div = document.createElement('div');
//   content.appendChild(div);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'Quattro Formaggi';
//   div.appendChild(h2);

//   const img = new Image();
//   img.src = quattroFormaggi;
//   div.appendChild(img);
// })();
