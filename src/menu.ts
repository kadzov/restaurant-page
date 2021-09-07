import './menu.scss';
import Capricciosa from './images/pizza/capricciosa.jpg';
import Hawaiian from './images/pizza/hawaiian.jpg';
import Margherita from './images/pizza/margherita.jpg';
import Neapolitan from './images/pizza/neapolitan.jpg';
import Pepperoni from './images/pizza/pepperoni.jpg';
import QuattroFormaggi from './images/pizza/quattro-formaggi.jpg';

export default () => {
  const div = document.createElement('div');
  div.id = 'menu';

  const capricciosa = () => {
    const section = document.createElement('section');

    const img = new Image();
    img.src = Capricciosa;
    section.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Capricciosa';
    section.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Crumbled Italian sausage, pepperoni, Canadian bacon, beef, and Wisconsin mozzarella.';
    section.appendChild(p);

    return section;
  };
  div.appendChild(capricciosa());

  const hawaiian = () => {
    const section = document.createElement('section');

    const img = new Image();
    img.src = Hawaiian;
    section.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Hawaiian';
    section.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Fresh spinach, Roma tomatoes, feta cheese, Wisconsin mozzarella, black olives, and Sicilian extra-virgin olive oil garlic sauce.';
    section.appendChild(p);

    return section;
  };
  div.appendChild(hawaiian());
  const margherita = () => {
    const section = document.createElement('section');

    const img = new Image();
    img.src = Margherita;
    section.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Margherita';
    section.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella. ';
    section.appendChild(p);

    return section;
  };
  div.appendChild(margherita());
  const neapolitan = () => {
    const section = document.createElement('section');

    const img = new Image();
    img.src = Neapolitan;
    section.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Neapolitan';
    section.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.';
    section.appendChild(p);

    return section;
  };
  div.appendChild(neapolitan());
  const pepperoni = () => {
    const section = document.createElement('section');

    const img = new Image();
    img.src = Pepperoni;
    section.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Pepperoni';
    section.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Prosciutto di Parma, arugula, basil, fig spread, Sicilian extravirgin olive oil, Wisconsin mozzarella, and balsamic glaze.';
    section.appendChild(p);

    return section;
  };
  div.appendChild(pepperoni());
  const quattroFormaggi = () => {
    const section = document.createElement('section');

    const img = new Image();
    img.src = QuattroFormaggi;
    section.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Quattro Formaggi';
    section.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.';
    section.appendChild(p);

    return section;
  };
  div.appendChild(quattroFormaggi());

  return div;
};
