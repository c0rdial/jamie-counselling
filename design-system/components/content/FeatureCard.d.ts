import type { IconName } from '../core/Icon';
export interface FeatureCardProps {
  /** Line icon shown above the title */
  icon?: IconName;
  title: string;
  text: string;
  style?: React.CSSProperties;
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
