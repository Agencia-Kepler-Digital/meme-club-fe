import { ChevronUp } from '@/src/assets/icons/ChevronUp';
import { Container } from './styles';

type SelectorProps = {
  label: string;
  options: string[];
  onChange: (newValue: string) => void;
};

export const Selector = ({ label, options, onChange }: SelectorProps) => {
  return (
    <Container>
      <label>{label}</label>
      <div className="selector">
        <select onChange={(e) => onChange(e.target.value)}>
          {options?.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
        <ChevronUp className="chevron" />
      </div>
    </Container>
  );
};
