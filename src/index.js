import './index.css';
import logo from './images/logo.jpg';

(() => {
  const img = new Image();
  img.src = logo;
  img.id = 'logo';
  content.appendChild(img);
})();

(() => {
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

  content.appendChild(nav);
})();
