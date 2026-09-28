export type IconName = 'arrow-left' | 'arrow-right' | 'arrow-up-right' | 'plus' | 'minus' | 'circle-plus' | 'circle-minus' | 'check' | 'mail' | 'map-pin' | 'clock' | 'menu'
  | 'flower' | 'person-standing' | 'heart' | 'sprout' | 'hand-heart' | 'infinity';
export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
