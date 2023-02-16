import { Container } from './styles';

import meme from '../../assets/meme.png';
import Image from 'next/image';
import { Button } from '@/src/components/Button';
import { Reload } from '@/src/assets/icons/Reload';
import { useContext, useEffect, useState } from 'react';
import MemeSended from './components/MemeSended';
import Voting from './components/Voting';
import Results from './components/Results';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import { formatMilisseconds } from '@/src/utils/formatMilissecondsToTimeString';
import EndGame from './components/EndGame';

export enum GameState {
  ROUND = 'round',
  WAITING_MEMES = 'waiting_memes',
  VOTING = 'voting',
  RESULTS = 'results',
  ENDGAME = 'endgame',
}

export const Game = () => {
  const { room, username, currentRound } = useContext(ColyseusContext);
  const [gameState, setGameState] = useState<GameState>(GameState.ENDGAME);

  const [caption, setCaption] = useState('');
  const [counter, setCounter] = useState(room?.state?.timePerRound);

  const [currentMeme, setCurrentMeme] = useState(0);

  const memes = [
    'https://dankest.co/wp-content/uploads/2021/06/3umnr3-1024x698.jpg',
    'https://cdn.cavesofnarshe.com/images/fanart/fullsize/1484.png',
  ];

  useEffect(() => {
    if (!gameState && gameState === GameState.RESULTS) {
      setGameState(GameState.ROUND);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState !== GameState.ROUND) {
      return;
    }

    if (counter === 0) {
      setGameState(GameState.VOTING);
      setCounter(5000);
    } else {
      setTimeout(() => {
        setCounter((prev: number) => prev - 1000);
      }, 1000);
    }
  }, [counter, gameState]);

  function handleSendMeme() {
    room?.send('send_meme', {
      caption,
      url: memes[currentMeme],
      author: username,
    });

    setGameState(GameState.WAITING_MEMES);
  }

  if (gameState === GameState.RESULTS) {
    return <Results setGameState={setGameState} />;
  }

  if (gameState === GameState.VOTING) {
    return <Voting setGameState={setGameState} />;
  }

  if (gameState === GameState.WAITING_MEMES) {
    return <MemeSended timeRemaining={counter} setGameState={setGameState} />;
  }

  if (gameState === GameState.ENDGAME) {
    return <EndGame />;
  }

  return (
    <Container>
      <header>
        <strong>Legende o seu meme!</strong>
      </header>

      <main>
        <div className="left-content">
          <Image src={memes[currentMeme]} alt="meme" className="meme" fill />
          <Button
            title="TROCAR MEME"
            fontSize={'0.8rem'}
            asideIcon={<Reload color="white" size={16} />}
            type="red"
            wrap
            onClick={() => setCurrentMeme((prev) => (prev === 1 ? 0 : 1))}
          />
        </div>
        <div className="right-content">
          <strong>TEMPO RESTANTE</strong>
          <span>{formatMilisseconds(counter)}</span>
          <form>
            <input type="text" onChange={(e) => setCaption(e.target.value)} />
            <Button
              title="ENVIAR MEME"
              fontSize={'0.8rem'}
              disabled={caption !== '' ? false : true}
              onClick={handleSendMeme}
            />
          </form>
        </div>
      </main>

      <footer>
        <strong>RODADA</strong>
        <span>
          {currentRound}/{room?.state?.rounds}
        </span>
      </footer>
    </Container>
  );
};
