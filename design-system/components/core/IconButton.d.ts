import type { IconName } from './Icon';
export interface IconButtonProps {
  icon?: IconName;
  label: string;
  onClick?: () => void;
  variant?: 'outline' | 'filled';
  size?: number;
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
