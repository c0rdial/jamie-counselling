/**
 * Greenery stock photos from Unsplash (free licence). Hotlinked so Unsplash's
 * CDN resizes and serves AVIF/WebP per browser.
 */
export const greenery = {
  home: "1659834742686-4becf04e8976",
  about: "1637778241826-015fdf2ca1bc",
  resources: "1609079913709-4796108f880d",
  contact: "1670859956807-049df98c4fb8",
  cta: "1516705132691-90229160e57d",
} as const;

/** URL for an Unsplash photo id at a given width. */
export const unsplashUrl = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

/** Responsive srcset for full-bleed use. */
export const unsplashSrcset = (id: string) =>
  [800, 1400, 2000].map(w => `${unsplashUrl(id, w)} ${w}w`).join(", ");
