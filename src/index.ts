import './index.scss';
import Logo from './images/logo.jpg';
import { home } from './home';
import { menu } from './menu'

(() => {
    const div = document.createElement('div');

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

    document.querySelector('#content').appendChild(div);
  })();

document.querySelector('#content').appendChild(home());
document.querySelector('#content').appendChild(menu());
