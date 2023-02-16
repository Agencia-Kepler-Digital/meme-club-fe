import { IconProps } from './icon';

export const Heart = ({ color, size, className }: IconProps) => {
  return (
    <svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82842 1.17157L7.99999 2.34315L9.17157 1.17157C10.7337 -0.390524 13.2663 -0.390524 14.8284 1.17157C16.3905 2.73367 16.3905 5.26633 14.8284 6.82843L7.99999 13.6569L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z"
        fill={color || 'white'}
      />
    </svg>
  );
};
