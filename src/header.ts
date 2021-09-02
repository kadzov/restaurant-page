import './header.scss';
import Logo from './images/logo.jpg';
export { header };

const header = () => {
  const div = document.createElement('div');
  div.id = 'header';

  const img = new Image();
  img.src = Logo;
  img.id = 'logo';
  div.appendChild(img);

  const nav = document.createElement('nav');
  const home = document.createElement('a');
  home.textContent = 'HOME';
  nav.appendChild(home);
  const menu = document.createElement('a');
  menu.textContent = 'MENU';
  nav.appendChild(menu);
  const location = document.createElement('a');
  location.textContent = 'LOCATION';
  nav.appendChild(location);
  div.appendChild(nav);

  return div;
};
