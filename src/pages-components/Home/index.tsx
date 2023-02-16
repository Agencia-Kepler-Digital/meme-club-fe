import { useContext, useEffect, useState } from 'react';

import { Container } from './styles';

import { Button } from '@/src/components/Button';
import { ChevronUp } from '@/src/assets/icons/ChevronUp';

import { useRouter } from 'next/router';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import { LoginForm } from '@/src/components/LoginForm';

export const Home = () => {
  const { setUsername, username } = useContext(ColyseusContext);
  const router = useRouter();

  useEffect(() => {
    setUsername('');
  }, []);

  return (
    <Container>
      <header>
        <h1>MEME</h1>
        <h2>CLUB</h2>
        <span>O jogo online multiplayer gratuito de memes</span>
      </header>

      <main>
        <LoginForm onChangeSetState={setUsername} />

        <div className="button-wrapper">
          <Button title="JOGAR AGORA" />
          <Button
            title="CRIAR SALA"
            type="red"
            onClick={() =>
              router.push({
                pathname: '/createroom',
                query: {
                  username,
                },
              })
            }
          />
        </div>
        <div className="button-wrapper">
          <Button
            title="ENTRAR"
            outline
            onClick={() => router.push('/login')}
          />
          <Button
            title="CADASTRE-SE"
            outline
            onClick={() => router.push('/register')}
          />
        </div>
      </main>

      <footer>
        <ChevronUp />
        <span>Como jogar?</span>
      </footer>
    </Container>
  );
};
