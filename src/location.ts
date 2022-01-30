import './location.scss';

export default () => {
  const location = document.createElement('section');
  location.id = 'location';

  {
    const info = document.createElement('section');
    location.append(info);
    info.id = 'info';

    {
      const section = document.createElement('section');
      info.append(section);
      section.className = 'section';

      const h1 = document.createElement('h1');
      h1.textContent = 'Address';
      section.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = '10721 Research Blvd.\nAustin, TX 78759';
      section.appendChild(p);
    }

    {
      const section = document.createElement('section');
      info.append(section);
      section.className = 'section';

      const h1 = document.createElement('h1');
      h1.textContent = 'Hours';
      section.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = 'Sun–Thurs 11am–9pm\nFri–Sat 11am–10pm';
      section.appendChild(p);
    }

    {
      const section = document.createElement('section');
      info.append(section);
      section.className = 'section';

      const h1 = document.createElement('h1');
      h1.textContent = 'Phone';
      section.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = '(737) 222-5373';
      section.appendChild(p);
    }
  }

  {
    const section = document.createElement('section');
    location.append(section);

    const map = document.createElement('div');
    map.id = 'map';
    section.appendChild(map);

    const script = document.createElement('script');
    script.textContent =
      "mapboxgl.accessToken='pk.eyJ1Ijoia2Fkem92IiwiYSI6ImNrdGN4OGt1azBoYmEycW81c3RhZjUyamYifQ.I_o9iQ7fDYbsrM1try0HwA';var map=new mapboxgl.Map({container:'map',style:'mapbox://styles/mapbox/streets-v11',center:[-97.7450452926051,30.399107447250515],zoom:16});new mapboxgl.Marker().setLngLat([-97.7450452926051,30.399107447250515]).addTo(map);";
    section.appendChild(script);
  }

  return location;
};
