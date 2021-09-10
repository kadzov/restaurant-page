import './location.scss';

export default () => {
  const section = document.createElement('section');
  section.id = 'location';

  const div = document.createElement('div');
  div.id = 'map';
  section.appendChild(div);

  const script = document.createElement('script');
  script.textContent =
    "mapboxgl.accessToken='pk.eyJ1Ijoia2Fkem92IiwiYSI6ImNrdGN4OGt1azBoYmEycW81c3RhZjUyamYifQ.I_o9iQ7fDYbsrM1try0HwA';var map=new mapboxgl.Map({container:'map',style: 'mapbox://styles/mapbox/streets-v11'});";
  section.appendChild(script);

  const info = () => {
    const section2 = document.createElement('section');

    const phone = document.createElement('i');
    phone.className = 'fas fa-phone';
    section2.appendChild(phone);

    return section2;
  };
  section.appendChild(info());

  return section;
};
