import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import { formatMilisseconds } from '@/src/utils/formatMilissecondsToTimeString';
import { useContext, useEffect, useState } from 'react';
import { GameState } from '../..';
import { Container } from './styles';

type MemeSendedProps = {
  timeRemaining: number;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

const MemeSended = ({ timeRemaining, setGameState }: MemeSendedProps) => {
  const { room } = useContext(ColyseusContext);
  const [counter, setCounter] = useState(timeRemaining);

  room?.onMessage('all_memes_sended', () => {
    setGameState(GameState.VOTING);
  });

  useEffect(() => {
    if (counter <= 0) {
      setGameState(GameState.VOTING);
    } else {
      setTimeout(() => {
        setCounter((prev: number) => prev - 1000);
      }, 1000);
    }
  }, [counter, setGameState]);

  return (
    <Container>
      <header>
        <h1>MEME</h1>
        <h2>ENVIADO</h2>
      </header>

      <p>Espere os outros participantes enviarem...</p>

      <strong>TEMPO RESTANTE</strong>
      <span>{formatMilisseconds(counter)}</span>
    </Container>
  );
};

export default MemeSended;
