import { IconProps } from './icon';

export const ChevronUp = ({ color, size, className }: IconProps) => {
  return (
    <svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.125 9.375L7.5 5L11.875 9.375"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
