export interface ImagePlaceholderProps {
  /** Short description of the intended photo, e.g. "Portrait — coach in morning light" */
  label?: string;
  /** CSS aspect-ratio, e.g. "4 / 5", "16 / 9", "1 / 1" */
  ratio?: string;
  radius?: string | number;
  tone?: 'sand' | 'cream' | 'sage' | 'forest' | 'ink';
  height?: string | number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;
