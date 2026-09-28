/**
 * Sticky translucent header: wordmark left, plain text links right.
 * @startingPoint section="Navigation" subtitle="Sticky header with text links" viewport="1200x90"
 */
export interface NavProps {
  links?: string[];
  active?: string;
  onNavigate?: (link: string) => void;
  brand?: string;
}
export declare function Nav(props: NavProps): JSX.Element;
