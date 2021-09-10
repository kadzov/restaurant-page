import './home.scss';
import Pizzeria from './images/pizzeria.jpg';

export default () => {
  const section = document.createElement('section');
  section.id = 'home';

  const img = new Image();
  img.src = Pizzeria;
  section.appendChild(img);

  const h1 = document.createElement('h1');
  h1.textContent = 'The Best New York Style Pizza Around!';
  section.appendChild(h1);

  const p = document.createElement('p');
  p.textContent =
    'The Russo family has been serving up the best New York Style Pizza and authentic Italian cuisine for years. Our recipes have been passed down from generation to generation all the way from Naples and Sicily. Russo’s mission is to serve New York style pizza and authentic Italian food worldwide so that no matter your location, you’ll be able to enjoy the delicious, traditional Russo family recipes.';
  section.appendChild(p);

  return section;
};
