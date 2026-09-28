export interface TimelineEntry { title: string; text: string; }
/**
 * Scroll-driven vertical timeline: a lime progress line grows down the rail as the user scrolls, lighting each dot it passes.
 * @startingPoint section="Content" subtitle="Scroll-progress story timeline" viewport="700x620"
 */
export interface TimelineProps {
  items: TimelineEntry[];
  /** Light text for forest panels (default true) */
  inverse?: boolean;
  /** Viewport fraction (0–1) where the progress head sits. Default 0.6 */
  anchor?: number;
  itemHeight?: number;
}
export declare function Timeline(props: TimelineProps): JSX.Element;
