import './index.scss';
import header from './header';
import home from './home';
import menu from './menu';
import location from './location';

const content = document.querySelector('#content');
content.appendChild(header());
const buttons = document.querySelectorAll('a');
content.appendChild(home());

buttons.forEach((i) => {
  i.addEventListener('click', () => {
    content.removeChild(content.childNodes[1]);
  });
});

buttons[0].addEventListener('click', () => {
  if (!document.querySelector('#home')) {
    content.appendChild(home());
  }
});
buttons[1].addEventListener('click', () => {
  content.appendChild(menu());
});
buttons[2].addEventListener('click', () => {
  content.appendChild(location());
});
