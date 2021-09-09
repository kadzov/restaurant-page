import './location.scss';

export { location, script };

const location = () => {
  const section = document.createElement('section');
  section.id = 'location';

  const div = document.createElement('div');
  div.id = 'map';
  section.appendChild(div);

  return section;
};

const script = document.createElement('script');
script.textContent =
  "mapboxgl.accessToken='pk.eyJ1Ijoia2Fkem92IiwiYSI6ImNrdGN4OGt1azBoYmEycW81c3RhZjUyamYifQ.I_o9iQ7fDYbsrM1try0HwA';var map=new mapboxgl.Map({container:'map',style: 'mapbox://styles/mapbox/streets-v11'});";
