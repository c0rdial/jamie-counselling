export interface TimelineItemProps {
  title: string;
  text: string;
  /** Dot lights up lime once the scroll progress reaches it */
  active?: boolean;
  /** Light text for forest panels */
  inverse?: boolean;
  minHeight?: number;
}
export declare function TimelineItem(props: TimelineItemProps): JSX.Element;
