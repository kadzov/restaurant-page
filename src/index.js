import './style.css';
import Pizza from './pizza.jpg';

function component() {
  const img = new Image();
  img.src = Pizza;
  content.appendChild(img);
}

content.appendChild(component());
