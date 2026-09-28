export interface ServiceListItem { label: string; text: string; }
/**
 * Service / package card with image, duration tag, price and include lists.
 * @startingPoint section="Content" subtitle="Coaching package card" viewport="1100x760"
 */
export interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  includes?: ServiceListItem[];
  audience?: ServiceListItem[];
  cta?: string;
  onExplore?: () => void;
  imageLabel?: string;
  /** Hide the Includes / Who is it for lists */
  compact?: boolean;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
