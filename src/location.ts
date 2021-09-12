import './location.scss';

export default () => {
  const section = document.createElement('section');
  section.id = 'location';

  const info = () => {
    const section2 = document.createElement('section');
    section2.id = 'info';

    const address = () => {
      const section3 = document.createElement('section');
      section3.className = 'section';

      const h1 = document.createElement('h1');
      h1.textContent = 'Address';
      section3.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = '10721 Research Blvd.\nAustin, TX 78759';
      section3.appendChild(p);

      return section3;
    };
    section2.appendChild(address());

    const hours = () => {
      const section3 = document.createElement('section');
      section3.className = 'section';

      const h1 = document.createElement('h1');
      h1.textContent = 'Hours';
      section3.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = 'Sun–Thurs 11AM–9PM\nFri–Sat 11AM–10PM';
      section3.appendChild(p);

      return section3;
    };
    section2.appendChild(hours());

    const phone = () => {
      const section3 = document.createElement('section');
      section3.className = 'section';

      const h1 = document.createElement('h1');
      h1.textContent = 'Phone';
      section3.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = '(737) 222-5373';
      section3.appendChild(p);

      return section3;
    };
    section2.appendChild(phone());

    return section2;
  };
  section.appendChild(info());

  const map = () => {
    const section2 = document.createElement('section');

    const div = document.createElement('div');
    div.id = 'map';
    section2.appendChild(div);

    const script = document.createElement('script');
    script.textContent =
      "const coordinates=[-97.7450452926051,30.399107447250515];mapboxgl.accessToken='pk.eyJ1Ijoia2Fkem92IiwiYSI6ImNrdGN4OGt1azBoYmEycW81c3RhZjUyamYifQ.I_o9iQ7fDYbsrM1try0HwA';var map=new mapboxgl.Map({container:'map',style:'mapbox://styles/mapbox/streets-v11',center:coordinates,zoom:16});new mapboxgl.Marker().setLngLat(coordinates).addTo(map);";
    section2.appendChild(script);

    return section2;
  };
  section.appendChild(map());

  return section;
};
