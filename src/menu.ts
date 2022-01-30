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

  {
    const pizza = document.createElement('section');
    section.append(pizza);

    const img = new Image();
    img.src = Capricciosa;
    pizza.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Capricciosa';
    pizza.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
      'Crumbled Italian sausage, pepperoni, Canadian bacon, beef, and Wisconsin mozzarella.';
    pizza.appendChild(p);
  }

  {
    const pizza = document.createElement('section');
    section.append(pizza);

    const img = new Image();
    img.src = Hawaiian;
    pizza.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Hawaiian';
    pizza.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
      'Fresh spinach, Roma tomatoes, feta cheese, Wisconsin mozzarella, black olives, and Sicilian extra-virgin olive oil garlic sauce.';
    pizza.appendChild(p);
  }

  {
    const pizza = document.createElement('section');
    section.append(pizza);

    const img = new Image();
    img.src = Margherita;
    pizza.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Margherita';
    pizza.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
      'Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella.';
    pizza.appendChild(p);
  }

  {
    const pizza = document.createElement('section');
    section.append(pizza);

    const img = new Image();
    img.src = Neapolitan;
    pizza.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Neapolitan';
    pizza.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
      'Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.';
    pizza.appendChild(p);
  }

  {
    const pizza = document.createElement('section');
    section.append(pizza);

    const img = new Image();
    img.src = Pepperoni;
    pizza.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Pepperoni';
    pizza.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
      'Prosciutto di Parma, arugula, basil, fig spread, Sicilian extravirgin olive oil, Wisconsin mozzarella, and balsamic glaze.';
    pizza.appendChild(p);
  }

  {
    const pizza = document.createElement('section');
    section.append(pizza);

    const img = new Image();
    img.src = QuattroFormaggi;
    pizza.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Quattro Formaggi';
    pizza.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
      'House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.';
    pizza.appendChild(p);
  }

  return section;
};
