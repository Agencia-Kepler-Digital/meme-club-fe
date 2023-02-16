import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Container } from './styles';

export const Input = ({
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};
