export interface ScrollSpinImageProps {
  size?: number;
  label?: string;
  /** Degrees of rotation per pixel scrolled. Default 0.12 */
  speed?: number;
  /** Thin sand ring around the photo */
  ring?: boolean;
  tone?: 'sand' | 'cream' | 'sage' | 'forest';
  style?: React.CSSProperties;
}
export declare function ScrollSpinImage(props: ScrollSpinImageProps): JSX.Element;
