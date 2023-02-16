import Image from 'next/image';
import { Container } from './styles';

import meme from '@/src/assets/pfp1.svg';

type PlayerResultItem = {
  position: number;
  username: string;
  score: number;
  textColor?: string;
};

const PlayerResultItem = ({
  position,
  username,
  score,
  textColor,
}: PlayerResultItem) => {
  return (
    <Container textColor={textColor}>
      <div className="left">
        <span>{position}</span>
        <Image src={meme} alt="profile-picture" className="profile-picture" />
        <span>{username}</span>
      </div>
      <strong>{score} pontos</strong>
    </Container>
  );
};

export default PlayerResultItem;
