import { Container, PodiumWrapper, ScoreBoard } from './styles';

import { useContext, useEffect, useState } from 'react';
import { GameState } from '../..';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import PodiumItem from '@/src/components/PodiumItem';

import pfp1 from '@/src/assets/pfp1.svg';
import PlayerResultItem from '@/src/components/PlayerResultItem';

const EndGame = () => {
  return (
    <Container>
      <header>
        <span>RESULTADOS</span>
        <strong>FIM DO JOGO</strong>
      </header>

      <div>
        <PodiumWrapper>
          <PodiumItem
            position={3}
            profilePicture={pfp1}
            username="zebstrika"
            score={350}
          />
          <PodiumItem
            position={1}
            profilePicture={pfp1}
            username="jubs"
            score={350}
          />
          <PodiumItem
            position={2}
            profilePicture={pfp1}
            username="zebstrika"
            score={350}
          />
        </PodiumWrapper>

        <ScoreBoard>
          <PlayerResultItem
            position={4}
            score={20}
            username="julia"
            textColor="#000"
          />
          <PlayerResultItem
            position={4}
            score={20}
            username="julia"
            textColor="#000"
          />
          <PlayerResultItem
            position={4}
            score={20}
            username="julia"
            textColor="#000"
          />
        </ScoreBoard>
      </div>
    </Container>
  );
};

export default EndGame;
