import { Button } from '@/src/components/Button';
import { PlayerItem } from '@/src/components/PlayerItem';
import { Container } from './styles';

export const Room = () => {
  return (
    <Container>
      <header>
        <strong>Sala</strong>
        <span>05 JOGADORES</span>
      </header>

      <div className="players-container">
        <PlayerItem username="MikeSpike" leader />
        <PlayerItem username="Zebstrik4" />
        <PlayerItem username="Arrudonimous.js" />
        <PlayerItem username="garibela_https" />
        <PlayerItem username="gabb.zwc" />
      </div>

      <div className="button-wrapper">
        <Button title="SAIR DA SALA" type="red" />
        <Button title="COMEÇAR O JOGO" />
      </div>
    </Container>
  );
};
