import { Button } from '@/src/components/Button';
import { Selector } from '@/src/components/Selector';
import { ColyseusContext } from '@/src/contexts/ColyseusContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';

export type CreateRoomProps = {
  username: string;
};

export const CreateRoom = ({ username }: CreateRoomProps) => {
  const [rounds, setRounds] = useState<number>(3);
  const [maxPlayers, setMaxPlayers] = useState<number>(3);
  const [timePerRound, setTimePerRound] = useState<number>(45 * 1000); // 45 segundos

  const router = useRouter();
  const { client, setRoom, setUsername, setRoomState } =
    useContext(ColyseusContext);

  useEffect(() => {
    setUsername(username);
  });

  function handleCreateRoom() {
    client
      .create('gameroom', {
        username,
        leader: true,
        rounds,
        maxPlayers,
        timePerRound,
      })
      .then((room) => {
        setRoom(room);
        setRoomState(room.state);
        router.push(`/room/${room.id}`);
      });
  }

  function handleChangeRounds(newValue: string) {
    setRounds(Number(newValue.split(' ')[0]));
  }

  function handleChangeMaxPlayers(newValue: string) {
    setMaxPlayers(Number(newValue.split(' ')[0]));
  }

  function handleChangeTimePerRound(newValue: string) {
    const quantity = Number(newValue.split(' ')[0]);
    const timeMeasure = newValue.split(' ')[1];

    let milisseconds;

    if (timeMeasure === 'segundos') {
      milisseconds = quantity * 1000;
    } else {
      milisseconds = quantity * 60 * 1000;
    }

    setTimePerRound(milisseconds);
  }

  return (
    <Container>
      <header>
        <strong>Crie sua sala!</strong>
      </header>

      <Selector
        label="Jogadores"
        options={[
          '3 jogadores',
          '4 jogadores',
          '5 jogadores',
          '6 jogadores',
          '7 jogadores',
          '8 jogadores',
        ]}
        onChange={handleChangeMaxPlayers}
      />
      <Selector
        label="Rodadas"
        options={['3 rodadas', '4 rodadas', '5 rodadas']}
        onChange={handleChangeRounds}
      />
      <Selector
        label="Tempo por rodada"
        options={['45 segundos', '1 minuto', '2 minutos']}
        onChange={handleChangeTimePerRound}
      />

      <div className="button-wrapper">
        <Button title="CANCELAR" type="red" onClick={() => router.push('/')} />
        <Button title="CRIAR SALA" onClick={handleCreateRoom} />
      </div>
    </Container>
  );
};

export default CreateRoom;
