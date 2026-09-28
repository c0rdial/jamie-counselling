export interface CTABannerProps {
  title?: string;
  text?: string;
  cta?: string;
  onCta?: () => void;
  imageLabel?: string;
}
export declare function CTABanner(props: CTABannerProps): JSX.Element;
