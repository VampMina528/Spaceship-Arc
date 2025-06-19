import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import CountUp from 'react-countup';
import { useEffect, useState, CSSProperties } from 'react';
import * as THREE from 'three';
import { gql, useQuery } from '@apollo/client';

const GET_PLANET = gql`
  query GetPlanet($id: ID!) {
    planet(id: $id) {
      name
      distance
      description
      gravity
      temperature
      habitability
      anomalies
      loadout
    }
  }
`;

const Kepler186f = () => {
  const [startCount, setStartCount] = useState(false);
  const texture = useLoader(THREE.TextureLoader, '/textures/kepler186f-texture.jpg');

  const { data, loading, error } = useQuery(GET_PLANET, {
    variables: { id: 'kepler-186f' },
  });

  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error || !data?.planet) return <p style={styles.error}>Error loading planet data.</p>;

  const {
    name,
    distance,
    description,
    gravity,
    temperature,
    habitability,
    anomalies,
    loadout,
  } = data.planet;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{name}</h1>

      <div style={styles.counterBox}>
        <span style={styles.counterLabel}>Distance from Earth:</span>
        <span style={styles.counterValue}>
          {startCount && (
            <CountUp
              end={distance}
              duration={4}
              suffix=" LY"
              useEasing={true}
              decimals={0}
            />
          )}
        </span>
      </div>

      <div style={styles.canvasContainer}>
        <Canvas style={{ height: '300px' }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 5]} />
          <mesh rotation={[0.2, 0.4, 0]}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial map={texture} />
          </mesh>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div style={styles.description}>
        <p>{description}</p>
        <p>
          <strong>Surface Gravity:</strong> {gravity}<br />
          <strong>Temperature:</strong> {temperature}<br />
          <strong>Habitability Score:</strong> {habitability}
        </p>
        <p>
          <strong>Nearby Space Anomalies:</strong>
          <ul>{anomalies.map((a: string, i: number) => <li key={i}>{a}</li>)}</ul>
        </p>
        <p>
          <strong>Recommended Survival Loadout:</strong>
          <ul>{loadout.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    backgroundColor: '#0a0a0a',
    color: '#e6e6e6',
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Orbitron, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.4rem',
    color: '#00ff99',
    marginBottom: '10px',
  },
  counterBox: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  counterLabel: {
    fontSize: '1.2rem',
    color: '#ccc',
    marginRight: '10px',
  },
  counterValue: {
    fontSize: '2rem',
    fontFamily: 'Courier New, monospace',
    color: '#00ff00',
    textShadow: '0 0 8px #00ff00',
  },
  canvasContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  description: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontSize: '1rem',
    textAlign: 'justify',
  },
  loading: {
    color: '#ccc',
    textAlign: 'center',
    padding: '40px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    padding: '40px',
  },
};

export default Kepler186f;
