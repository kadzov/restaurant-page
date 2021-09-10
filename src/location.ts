import './location.scss';

export default () => {
  const section = document.createElement('section');
  section.id = 'location';

  const map = () => {
    const section2 = document.createElement('section');

    const div = document.createElement('div');
    div.id = 'map';
    section2.appendChild(div);

    const script = document.createElement('script');
    script.textContent =
      "mapboxgl.accessToken='pk.eyJ1Ijoia2Fkem92IiwiYSI6ImNrdGN4OGt1azBoYmEycW81c3RhZjUyamYifQ.I_o9iQ7fDYbsrM1try0HwA';var map=new mapboxgl.Map({container:'map',style: 'mapbox://styles/mapbox/streets-v11'});";
    section2.appendChild(script);

    return section2;
  };
  section.appendChild(map());

  const info = () => {
    const section2 = document.createElement('section');

    const phone = () => {
      const section3 = document.createElement('section');

      const i = document.createElement('i');
      i.className = 'fas fa-phone';
      section3.appendChild(i);

      return section3;
    };
    section2.appendChild(phone());

    const address = () => {
      const section3 = document.createElement('section');

      const i = document.createElement('i');
      i.className = 'fas fa-map-marker-alt';
      section3.appendChild(i);

      return section3;
    };
    section2.appendChild(address());

    const hours = () => {
      const section3 = document.createElement('section');

      const i = document.createElement('i');
      i.className = 'fas fa-clock';
      section3.appendChild(i);

      return section3;
    };
    section2.appendChild(hours());

    return section2;
  };
  section.appendChild(info());

  return section;
};
