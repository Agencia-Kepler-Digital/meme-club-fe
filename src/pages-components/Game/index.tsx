import { Container } from './styles';

import meme from '../../assets/meme.png';
import Image from 'next/image';
import { Button } from '@/src/components/Button';
import { Reload } from '@/src/assets/icons/Reload';
import { useState } from 'react';
import MemeSended from '@/src/components/MemeSended';

export const Game = () => {
  const [memeSended, setMemeSended] = useState();

  if (!memeSended) {
    return <MemeSended />;
  }

  return (
    <Container>
      <header>
        <strong>Legende o seu meme!</strong>
      </header>

      <main>
        <div className="left-content">
          <Image src={meme} alt="meme" className="meme" />
          <Button
            title="TROCAR MEME"
            fontSize={'0.8rem'}
            asideIcon={<Reload color="white" size={16} />}
            type="red"
            wrap
          />
        </div>
        <div className="right-content">
          <strong>TEMPO RESTANTE</strong>
          <span>0:59</span>
          <form>
            <input type="text" />
            <Button title="ENVIAR MEME" fontSize={'0.8rem'} />
          </form>
        </div>
      </main>

      <footer>
        <strong>RODADA</strong>
        <span>1/5</span>
      </footer>
    </Container>
  );
};
