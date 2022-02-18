import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((planetas, i) => {
            const { name } = planetas;
            const { image } = planetas;
            const re = <PlanetCard key={ i } planetName={ name } planetImage={ image } />;
            return re;
          })
        }
      </div>
    );
  }
}

export default SolarSystem;
