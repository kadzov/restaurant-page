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
    section2.id = 'info';

    const address = () => {
      const section3 = document.createElement('section');
      section3.className = 'section';

      const h2 = document.createElement('h2');
      h2.textContent = 'ADDRESS';
      section3.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = '10721 Research Blvd.\nAustin, TX 78759';
      section3.appendChild(p);

      return section3;
    };
    section2.appendChild(address());

    const hours = () => {
      const section3 = document.createElement('section');
      section3.className = 'section';

      const h2 = document.createElement('h2');
      h2.textContent = 'HOURS';
      section3.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = 'Sun–Thurs 11am–9pm\nFri–Sat 11am–10pm';
      section3.appendChild(p);

      return section3;
    };
    section2.appendChild(hours());

    const phone = () => {
      const section3 = document.createElement('section');
      section3.className = 'section';

      const h2 = document.createElement('h2');
      h2.textContent = 'PHONE';
      section3.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = '(737) 222-5373';
      section3.appendChild(p);

      return section3;
    };
    section2.appendChild(phone());

    return section2;
  };
  section.appendChild(info());

  return section;
};
