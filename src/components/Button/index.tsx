import { Container } from './styles';

type ButtonProps = {
  title: string;
  type?: 'red' | 'green';
  fontSize?: string;
  asideIcon?: React.ReactNode;
  wrap?: boolean;
};

export const Button = ({
  title,
  type,
  fontSize,
  asideIcon,
  wrap,
}: ButtonProps) => (
  <Container type={type || 'green'} fontSize={fontSize} wrap={wrap}>
    <button>
      {asideIcon}
      {title}
    </button>
  </Container>
);
