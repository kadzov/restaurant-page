import './header.scss';
import Logo from './images/logo.jpg';

export default () => {
  const header = document.createElement('header');

  const img = new Image();
  img.src = Logo;
  header.appendChild(img);

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
  
  header.appendChild(nav);

  return header;
};
