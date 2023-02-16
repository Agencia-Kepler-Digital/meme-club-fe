import { Button } from '@/src/components/Button';
import { LoginForm } from '@/src/components/LoginForm';
import { PlayerItem } from '@/src/components/PlayerItem';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { Container } from './styles';

export type RoomProps = {
  location: string;
  roomId?: string;
};
export const Room = ({ location, roomId }: RoomProps) => {
  const [usernameInput, setUsernameInput] = useState('');
  const {
    client,
    room,
    setRoom,
    setRoomState,
    username,
    setUsername,
    players,
  } = useContext(ColyseusContext);

  const [inRoom, setInRoom] = useState(false);

  const router = useRouter();

  function handleJoinRoom() {
    setUsername(usernameInput);
    if (roomId && !inRoom) {
      client
        .joinById(roomId, {
          username: usernameInput,
          leader: false,
        })
        .then((room) => {
          setRoom(room);
          setRoomState(room.state);
          setInRoom(true);
        });
    }
  }

  function handleStartGame() {
    room?.send('start');
  }

  room?.onMessage('start_game', () => {
    router.push('/game');
  });

  if (!username && !inRoom) {
    return (
      <Container>
        <header style={{ marginTop: 64 }}>
          <h1>MEME</h1>
          <h2>CLUB</h2>
          <p>O jogo online multiplayer gratuito de memes</p>
        </header>
        <LoginForm onChangeSetState={setUsernameInput} />
        <Button
          title="ENTRAR NA SALA"
          wrap={false}
          className="join-room"
          fontSize={'1rem'}
          onClick={handleJoinRoom}
        />
      </Container>
    );
  }

  return (
    <Container>
      <header>
        <strong>Sala</strong>
        <span>
          {players?.length} JOGADOR{players?.length > 1 && 'ES'}
        </span>
      </header>

      <div className="players-container">
        {players?.map((player: any, i: number) => (
          <PlayerItem
            key={i}
            username={player.username}
            leader={player.leader}
          />
        ))}
      </div>

      <div className="button-wrapper">
        <Button title="SAIR DA SALA" type="red" />
        <Button title="COMEÇAR O JOGO" onClick={handleStartGame} />
      </div>

      <div className="room-link">
        <strong>
          {location}/room/{room?.id}
        </strong>
      </div>
    </Container>
  );
};
