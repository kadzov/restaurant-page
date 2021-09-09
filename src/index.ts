import './index.scss';

import header from './header';
// import home from './home';
// import menu from './menu';
import { location, map } from './location';

const content = document.querySelector('#content');

content.appendChild(header());
// content.appendChild(home());
// content.appendChild(menu());
content.appendChild(location());
document.querySelector('body').appendChild(map());
