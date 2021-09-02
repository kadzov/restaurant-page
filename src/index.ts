import './index.scss';
import { header } from './header';
import { home } from './home';
// import { menu } from './menu';

document.querySelector('#content').appendChild(header());
document.querySelector('#content').appendChild(home());
// document.querySelector('#content').appendChild(menu());
