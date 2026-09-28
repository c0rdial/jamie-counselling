export interface FAQItemProps {
  question: string;
  answer: string;
  open?: boolean;
  onToggle?: () => void;
}
export declare function FAQItem(props: FAQItemProps): JSX.Element;
