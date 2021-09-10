import './menu.scss';
import Capricciosa from './images/pizza/capricciosa.jpg';
import Hawaiian from './images/pizza/hawaiian.jpg';
import Margherita from './images/pizza/margherita.jpg';
import Neapolitan from './images/pizza/neapolitan.jpg';
import Pepperoni from './images/pizza/pepperoni.jpg';
import QuattroFormaggi from './images/pizza/quattro-formaggi.jpg';

export default () => {
  const section = document.createElement('section');
  section.id = 'menu';

  const capricciosa = () => {
    const section2 = document.createElement('section');

    const img = new Image();
    img.src = Capricciosa;
    section2.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Capricciosa';
    section2.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Crumbled Italian sausage, pepperoni, Canadian bacon, beef, and Wisconsin mozzarella.';
    section2.appendChild(p);

    return section2;
  };
  section.appendChild(capricciosa());

  const hawaiian = () => {
    const section2 = document.createElement('section');

    const img = new Image();
    img.src = Hawaiian;
    section2.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Hawaiian';
    section2.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Fresh spinach, Roma tomatoes, feta cheese, Wisconsin mozzarella, black olives, and Sicilian extra-virgin olive oil garlic sauce.';
    section2.appendChild(p);

    return section2;
  };
  section.appendChild(hawaiian());
  const margherita = () => {
    const section2 = document.createElement('section');

    const img = new Image();
    img.src = Margherita;
    section2.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Margherita';
    section2.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella.';
    section2.appendChild(p);

    return section2;
  };
  section.appendChild(margherita());
  const neapolitan = () => {
    const section2 = document.createElement('section');

    const img = new Image();
    img.src = Neapolitan;
    section2.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Neapolitan';
    section2.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.';
    section2.appendChild(p);

    return section2;
  };
  section.appendChild(neapolitan());
  const pepperoni = () => {
    const section2 = document.createElement('section');

    const img = new Image();
    img.src = Pepperoni;
    section2.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Pepperoni';
    section2.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Prosciutto di Parma, arugula, basil, fig spread, Sicilian extravirgin olive oil, Wisconsin mozzarella, and balsamic glaze.';
    section2.appendChild(p);

    return section2;
  };
  section.appendChild(pepperoni());
  const quattroFormaggi = () => {
    const section2 = document.createElement('section');

    const img = new Image();
    img.src = QuattroFormaggi;
    section2.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Quattro Formaggi';
    section2.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.';
    section2.appendChild(p);

    return section2;
  };
  section.appendChild(quattroFormaggi());

  return section;
};
