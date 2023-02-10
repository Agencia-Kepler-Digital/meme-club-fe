import Image from 'next/image';
import { Container } from './styles';
import pfp1 from '../../assets/pfp1.svg';
import { Reload } from '@/src/assets/icons/Reload';
import { Button } from '@/src/components/Button';
import { ChevronUp } from '@/src/assets/icons/ChevronUp';

export const Home = () => {
  return (
    <Container>
      <header>
        <h1>MEME</h1>
        <h2>CLUB</h2>
        <span>O jogo online multiplayer gratuito de memes</span>
      </header>

      <main>
        <Image className="profile-picture" alt="profile-picture" src={pfp1} />
        <div className="reload-icon-wrapper">
          <Reload size={24} />
        </div>

        <form>
          <input type="text" />
          <Reload size={24} className="input-icon" color="#FFF" />
        </form>

        <div className="button-wrapper">
          <Button title="JOGAR AGORA" />
          <Button title="CRIAR SALA" type="red" />
        </div>
      </main>

      <footer>
        <ChevronUp />
        <span>Como jogar?</span>
      </footer>
    </Container>
  );
};
