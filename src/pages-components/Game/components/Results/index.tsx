import PlayerResultItem from '@/src/components/PlayerResultItem';
import ResultCard from '@/src/components/ResultCard';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import { formatMilisseconds } from '@/src/utils/formatMilissecondsToTimeString';
import { useContext, useEffect, useState } from 'react';
import { GameState } from '../..';
import { Meme } from '../Voting';
import { Container } from './styles';

type ResultsProps = {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

const Results = ({ setGameState }: ResultsProps) => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [counter, setCounter] = useState(20 * 1000);

  const { roomState, currentRound, setCurrentRound } =
    useContext(ColyseusContext);
  useEffect(() => {
    const fetchMemes: Meme[] = [];

    roomState?.memes.forEach((value: Meme) => fetchMemes.push(value));

    setMemes(fetchMemes.sort((a, b) => b.score - a.score));
  }, [roomState, memes]);

  useEffect(() => {
    if (counter <= 0) {
      setCurrentRound((prev) => prev + 1);
      setGameState(GameState.ROUND);
    } else {
      setTimeout(() => {
        setCounter((prev: number) => prev - 1000);
      }, 1000);
    }
  }, [counter, setGameState]);

  return (
    <Container>
      <header>
        <p>RESULTADOS</p>
        <strong>RODADA</strong>
        <span>
          {currentRound}/{roomState?.rounds}
        </span>
      </header>

      <main>
        <div className="left-content">
          {memes?.map((data: Meme, i) => (
            <ResultCard
              key={i}
              author={data.author}
              score={data.score}
              url={data.url}
            />
          ))}
        </div>
        <div className="right-content">
          <div className="scoreboard">
            <strong>PLACAR</strong>
            {memes?.map((data: Meme, i) => (
              <PlayerResultItem
                key={i}
                position={i + 1}
                username={data.author}
                score={data.score}
              />
            ))}
          </div>
          <strong>PRÓXIMA RODADA COMEÇA EM</strong>
          <span>{formatMilisseconds(counter)}</span>
        </div>
      </main>
    </Container>
  );
};

export default Results;
