import { useState } from 'react';
import Kepler186f from '../pages/Kepler186f';

const PlanetSlideshow = () => {
  const planets = [
    { name: 'Kepler-186f', component: <Kepler186f /> },
    // Later: add more planets here
  ];

  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % planets.length);
  };

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + planets.length) % planets.length);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.nav}>
        <button style={styles.button} onClick={goToPrevious}>← Prev</button>
        <span style={styles.title}>{planets[index].name}</span>
        <button style={styles.button} onClick={goToNext}>Next →</button>
      </div>
      <div>{planets[index].component}</div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#000',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'Orbitron, sans-serif',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#111',
    borderBottom: '2px solid #444',
  },
  button: {
    backgroundColor: '#00ff99',
    color: '#000',
    border: 'none',
    padding: '10px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

export default PlanetSlideshow;
