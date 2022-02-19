import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarsystem">
        <Title headline="Planetas" />
        <div className="planets">
          {
            Planets.map((planetas, i) => {
              const { name } = planetas;
              const { image } = planetas;
              return <PlanetCard key={ i } planetName={ name } planetImage={ image } />;
            })
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
