import Image from 'next/image';
import { Container } from './styles';

import pfp from '../../assets/pfp1.svg';

type PlayerItemProps = {
  username: string;
  leader?: boolean;
};

export const PlayerItem = ({ username, leader }: PlayerItemProps) => {
  return (
    <Container>
      <div>
        <Image alt="player-picture" src={pfp} className="player-picture" />
        <span>{username}</span>
      </div>

      {leader && <span className="leader">VOCÊ É O LIDER</span>}
    </Container>
  );
};
