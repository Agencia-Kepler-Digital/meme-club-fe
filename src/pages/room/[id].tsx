import { GetServerSideProps, NextPage } from 'next';

import { Room as RoomComponent, RoomProps } from '../../pages-components/Room';

const Room: NextPage<RoomProps> = ({ location, roomId }) => (
  <RoomComponent location={location} roomId={roomId} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, params } = context;

  const location = req.headers.host;

  return {
    props: {
      location,
      roomId: params?.id,
    },
  };
};

export default Room;
