import Image from 'next/image';
import { Container, RateContainer } from './styles';

import { formatMilisseconds } from '@/src/utils/formatMilissecondsToTimeString';
import { useContext, useEffect, useState } from 'react';
import { GameState } from '../..';
import { Star } from '@/src/assets/icons/Star';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';

import lazyFace from '@/src/assets/lazy_face.png';
import diagonalFace from '@/src/assets/diagonal_face.png';
import neutralFace from '@/src/assets/neutral_face.png';
import smileFace from '@/src/assets/smile_face.png';
import loveFace from '@/src/assets/love_face.png';

type VotingProps = {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

export type Meme = {
  caption: string;
  url: string;
  author: string;
  authorSessionId: string;
  score: number;
};

const Voting = ({ setGameState }: VotingProps) => {
  const [counter, setCounter] = useState(20 * 1000);
  const [rate, setRate] = useState(0);
  const [memes, setMemes] = useState<Meme[]>([]);
  const [currentMeme, setCurrentMeme] = useState(0);

  const { roomState, room, username } = useContext(ColyseusContext);

  useEffect(() => {
    const fetchMemes: Meme[] = [];

    roomState?.memes.forEach((value: Meme) => fetchMemes.push(value));

    setMemes(fetchMemes);
  }, [roomState, memes]);

  useEffect(() => {
    if (counter <= 0) {
      room?.send('vote', {
        authorSessionId: memes[currentMeme]?.authorSessionId,
        rate: rate * 10,
      });
      if (currentMeme + 1 === memes?.length) {
        setGameState(GameState.RESULTS);
      } else {
        setCurrentMeme((prev) => prev + 1);
        setRate(0);
        setCounter(20 * 1000);
      }
    } else {
      setTimeout(() => {
        setCounter((prev: number) => prev - 1000);
      }, 1000);
    }
  }, [counter, setGameState]);

  function handleChangeRate(value: number) {
    if (value === rate) {
      setRate(0);
    } else {
      setRate(value);
    }
  }

  return (
    <Container>
      <header>
        <strong>Vote no meme!</strong>
      </header>

      <strong>TEMPO RESTANTE</strong>
      <span>{formatMilisseconds(counter)}</span>

      <div className="meme-container">
        <Image alt="meme" className="meme" fill src={memes[currentMeme]?.url} />
      </div>
      {memes[currentMeme]?.author !== username && (
        <RateContainer>
          <Image
            alt="lazy-face"
            src={lazyFace}
            onClick={() => handleChangeRate(1)}
            className={rate === 1 ? 'active' : 'disabled'}
          />
          <Image
            alt="lazy-face"
            src={diagonalFace}
            onClick={() => handleChangeRate(2)}
            className={rate === 2 ? 'active' : 'disabled'}
          />
          <Image
            alt="lazy-face"
            src={neutralFace}
            onClick={() => handleChangeRate(3)}
            className={rate === 3 ? 'active' : 'disabled'}
          />
          <Image
            alt="lazy-face"
            src={smileFace}
            onClick={() => handleChangeRate(4)}
            className={rate === 4 ? 'active' : 'disabled'}
          />
          <Image
            alt="lazy-face"
            src={loveFace}
            onClick={() => handleChangeRate(5)}
            className={rate === 5 ? 'active' : 'disabled'}
          />
        </RateContainer>
      )}

      <div className="meme-counter">
        <strong className="meme-strong">MEME</strong>
        <span>
          {currentMeme + 1}/{memes?.length}
        </span>
      </div>
    </Container>
  );
};

export default Voting;
