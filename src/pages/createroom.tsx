import { GetServerSideProps, NextPage } from 'next';
import {
  CreateRoom as CreateRoomComponent,
  CreateRoomProps,
} from '../pages-components/CreateRoom';

const CreateRoom: NextPage<CreateRoomProps> = ({ username }) => (
  <CreateRoomComponent username={username} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  if (!query.username) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      username: query?.username,
    },
  };
};

export default CreateRoom;
