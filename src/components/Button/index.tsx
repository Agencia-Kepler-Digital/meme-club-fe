import { Container } from './styles';

type ButtonProps = {
  title: string;
  type?: 'red' | 'green';
  fontSize?: string;
  asideIcon?: React.ReactNode;
  wrap?: boolean;
  onClick?: () => void;
  className?: string;
  outline?: boolean;
  disabled?: boolean;
};

export const Button = ({
  title,
  type,
  fontSize,
  asideIcon,
  wrap,
  onClick,
  className,
  outline,
  disabled,
}: ButtonProps) => (
  <Container
    type={type || 'green'}
    fontSize={fontSize}
    wrap={wrap}
    className={className}
    outline={outline}
    disabled={disabled}
  >
    <button onClick={onClick} disabled={disabled}>
      {asideIcon}
      {title}
    </button>
  </Container>
);
