import type { IconName } from './Icon';
/**
 * Pill button with a circular arrow badge on the right. Primary = forest fill + cream circle; glass = translucent, for dark panels; light = cream, for imagery; secondary = outline; link = underlined text.
 * @startingPoint section="Core" subtitle="Arrow-circle pill buttons" viewport="700x260"
 */
export interface ButtonProps {
  variant?: 'primary' | 'glass' | 'light' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Icon inside the circle (default arrow-right), or inline icon for secondary/link */
  icon?: IconName;
  /** Show the circular arrow badge. Default: true except secondary/link */
  arrow?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
