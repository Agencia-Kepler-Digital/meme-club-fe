import { Reload } from '@/src/assets/icons/Reload';
import Image from 'next/image';
import pfp1 from '@/src/assets/pfp1.svg';
import { Container } from './styles';

type LoginFormProps = {
  onChangeSetState: React.Dispatch<React.SetStateAction<string>>;
};
export const LoginForm = ({ onChangeSetState }: LoginFormProps) => {
  return (
    <Container>
      <Image className="profile-picture" alt="profile-picture" src={pfp1} />
      <div className="reload-icon-wrapper">
        <Reload size={24} />
      </div>

      <form>
        <input
          type="text"
          placeholder="Nickname"
          onChange={(e) => onChangeSetState(e.target.value)}
        />
        <Reload size={24} className="input-icon" color="#FFF" />
      </form>
    </Container>
  );
};
