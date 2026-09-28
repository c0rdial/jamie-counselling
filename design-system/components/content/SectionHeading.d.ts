export interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  align?: 'center' | 'left';
  /** Section titles are italic serif by default */
  italic?: boolean;
  size?: 'display' | 'h1' | 'h2' | 'h3';
  inverse?: boolean;
  maxWidth?: number;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
