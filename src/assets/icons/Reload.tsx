import { IconProps } from './icon';

export const Reload = ({ color, size, className }: IconProps) => {
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
        d="M10.7008 5.62071H13.8883V2.43321"
        stroke={color || '#3A55DB'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.29922 9.3793H1.11172V12.5668"
        stroke={color || '#3A55DB'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.36953 3.36952C3.91167 2.82659 4.55553 2.39587 5.26427 2.102C5.97302 1.80812 6.73275 1.65686 7.5 1.65686C8.26726 1.65686 9.02699 1.80812 9.73573 2.102C10.4445 2.39587 11.0883 2.82659 11.6305 3.36952L13.8883 5.62069"
        stroke={color || '#3A55DB'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6305 11.6305C11.0883 12.1734 10.4445 12.6041 9.73573 12.898C9.02699 13.1919 8.26726 13.3431 7.5 13.3431C6.73275 13.3431 5.97302 13.1919 5.26427 12.898C4.55553 12.6041 3.91167 12.1734 3.36953 11.6305L1.11172 9.3793"
        stroke={color || '#3A55DB'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
