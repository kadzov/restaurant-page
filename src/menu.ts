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
    const article = document.createElement('article');

    const img = new Image();
    img.src = Capricciosa;
    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Capricciosa';
    article.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Crumbled Italian sausage, pepperoni, Canadian bacon, beef, and Wisconsin mozzarella.';
    article.appendChild(p);

    return article;
  };
  section.appendChild(capricciosa());

  const hawaiian = () => {
    const article = document.createElement('article');

    const img = new Image();
    img.src = Hawaiian;
    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Hawaiian';
    article.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Fresh spinach, Roma tomatoes, feta cheese, Wisconsin mozzarella, black olives, and Sicilian extra-virgin olive oil garlic sauce.';
    article.appendChild(p);

    return article;
  };
  section.appendChild(hawaiian());
  const margherita = () => {
    const article = document.createElement('article');

    const img = new Image();
    img.src = Margherita;
    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Margherita';
    article.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella.';
    article.appendChild(p);

    return article;
  };
  section.appendChild(margherita());
  const neapolitan = () => {
    const article = document.createElement('article');

    const img = new Image();
    img.src = Neapolitan;
    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Neapolitan';
    article.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.';
    article.appendChild(p);

    return article;
  };
  section.appendChild(neapolitan());
  const pepperoni = () => {
    const article = document.createElement('article');

    const img = new Image();
    img.src = Pepperoni;
    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Pepperoni';
    article.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'Prosciutto di Parma, arugula, basil, fig spread, Sicilian extravirgin olive oil, Wisconsin mozzarella, and balsamic glaze.';
    article.appendChild(p);

    return article;
  };
  section.appendChild(pepperoni());
  const quattroFormaggi = () => {
    const article = document.createElement('article');

    const img = new Image();
    img.src = QuattroFormaggi;
    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Quattro Formaggi';
    article.appendChild(h2);

    const p = document.createElement('p');
    p.textContent =
      'House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.';
    article.appendChild(p);

    return article;
  };
  section.appendChild(quattroFormaggi());

  return section;
};
