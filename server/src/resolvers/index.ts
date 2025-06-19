const planets = [
  {
    id: 'kepler-186f',
    name: 'Kepler-186f',
    distance: 500,
    description:
      'Kepler-186f is the first Earth-sized exoplanet discovered in the habitable zone of its star. It is 500 light-years from Earth in the Cygnus constellation.',
    gravity: '~0.9g',
    temperature: '-40°C to 0°C',
    habitability: '0.61 (Moderate Potential)',
    anomalies: [
      'Ancient asteroid field',
      'Low-mass orbiting moon',
      'High radiation pocket near magnetic pole',
    ],
    loadout: [
      'Thermal survival suit with radiation shielding',
      'Portable oxygen generator and filter system',
      'Radiation-hardened shelter module',
      'Solar energy pack (low star output)',
    ],
  },
];

const resolvers = {
  Query: {
    planets: () => planets,
    planet: (_: any, { id }: { id: string }) =>
      planets.find((planet) => planet.id === id),
  },
};

export default resolvers;
