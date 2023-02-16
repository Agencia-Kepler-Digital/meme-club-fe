import { createContext, useState } from 'react';

import * as Colyseus from 'colyseus.js';

type ColyseusContextProvider = {
  children: React.ReactNode;
};

type ColyseusProps = {
  client: Colyseus.Client;
  room?: Colyseus.Room;
  setRoom: React.Dispatch<React.SetStateAction<any>>;
  roomState: any;
  setRoomState: React.Dispatch<React.SetStateAction<any>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  players: any;
  setPlayers: React.Dispatch<React.SetStateAction<any>>;
  currentRound: number;
  setCurrentRound: React.Dispatch<React.SetStateAction<number>>;
};

const client = new Colyseus.Client('ws://localhost:2567');

export const ColyseusContext = createContext({} as ColyseusProps);

export const ColyseusContextProvider = ({
  children,
}: ColyseusContextProvider) => {
  const [room, setRoom] = useState<Colyseus.Room>();
  const [roomState, setRoomState] = useState<any>();
  const [username, setUsername] = useState('');
  const [players, setPlayers] = useState();
  const [currentRound, setCurrentRound] = useState(1);

  room?.onStateChange((state) => {
    setRoomState(state);

    let newPlayersState: any = [];

    roomState?.players.forEach((value: any) => {
      newPlayersState.push(value);
    });

    setPlayers(newPlayersState);
  });

  return (
    <ColyseusContext.Provider
      value={{
        client,
        room,
        setRoom,
        roomState,
        setRoomState,
        username,
        setUsername,
        players,
        setPlayers,
        currentRound,
        setCurrentRound,
      }}
    >
      {children}
    </ColyseusContext.Provider>
  );
};
