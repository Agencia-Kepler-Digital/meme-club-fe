import { Container } from './styles';

import { Button } from '@/src/components/Button';
import { ChevronUp } from '@/src/assets/icons/ChevronUp';

import { useRouter } from 'next/router';
import { Input } from '@/src/components/Input';

export const Login = () => {
  const router = useRouter();

  return (
    <Container>
      <header>
        <h1>MEME</h1>
        <h2>CLUB</h2>
        <span>O jogo online multiplayer gratuito de memes</span>
      </header>

      <main>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="password" />
        <div className="button-wrapper">
          <Button title="VOLTAR" type="red" onClick={() => router.push('/')} />
          <Button title="ENTRAR" />
        </div>
      </main>

      <footer>
        <ChevronUp />
        <span>Como jogar?</span>
      </footer>
    </Container>
  );
};
