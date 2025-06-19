import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Welcome to Spaceship Arc</h1>
      <p style={styles.subtitle}>
        Explore new worlds, plan your voyage, and prepare for interstellar adventure.
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    color: '#ffffff',
    backgroundColor: '#000000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Orbitron, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#00ffcc',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#cccccc',
    maxWidth: '600px',
  },
};

export default Home;
