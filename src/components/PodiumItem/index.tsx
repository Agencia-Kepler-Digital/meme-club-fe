import Image from 'next/image';
import { Container } from './styles';

type PodiumItemProps = {
  position: number;
  profilePicture: string;
  username: string;
  score: number;
};
const PodiumItem = ({
  position,
  profilePicture,
  username,
  score,
}: PodiumItemProps) => {
  return (
    <Container style={{ marginTop: position !== 1 ? 40 : 0 }}>
      <h1>{position}</h1>

      {profilePicture && (
        <div className="picture-container">
          <Image
            alt="profile-picture"
            className="img"
            src={profilePicture}
            fill
          />
        </div>
      )}

      <h2>{username}</h2>
      {score && <span>{score} pontos</span>}
    </Container>
  );
};

export default PodiumItem;
