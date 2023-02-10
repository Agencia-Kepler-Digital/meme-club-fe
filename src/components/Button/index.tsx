import { Container } from './styles';

type ButtonProps = {
  title: string;
  type?: 'red' | 'green';
};

export const Button = ({ title, type }: ButtonProps) => (
  <Container type={type || 'green'}>
    <button>{title}</button>
  </Container>
);
