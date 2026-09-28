export interface FooterColumn { title: string; links: string[]; }
export interface FooterProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
  onNavigate?: (link: string) => void;
  credit?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
