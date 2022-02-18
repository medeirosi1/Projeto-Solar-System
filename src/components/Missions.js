import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((missao, i) => {
            const { name, year, country, destination } = missao;
            // Ajuda do colega Hugo na questão do Lint em MissionCard"
            return (<MissionCard
              key={ i }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />);
          })
        }
      </div>
    );
  }
}

export default Mission;
