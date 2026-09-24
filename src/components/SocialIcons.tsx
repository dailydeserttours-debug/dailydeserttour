import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.94 2 14.65 2 11.96 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.05-.8-.1-2 .02-2.9.1-.8.7-3.2.7-3.2s-.2-.4-.2-1c0-.9.5-1.6 1.2-1.6.6 0 .8.4.8 1 0 .6-.4 1.5-.6 2.4-.2.7.4 1.3 1 1.3 1.2 0 2.2-1.3 2.2-3.2 0-1.7-1.2-2.9-3-2.9-2 0-3.3 1.5-3.3 3.1 0 .6.2 1 .5 1.4.1.1.1.2.1.3l-.2.8c0 .2-.2.2-.4.1-1-.4-1.6-1.7-1.6-3 0-2.3 1.9-5.1 5.7-5.1 3 0 5.3 2.1 5.3 5 0 3-1.7 5.1-4.2 5.1-.8 0-1.6-.4-1.9-.9l-.5 2c-.2.7-.7 1.6-1 2.1.8.2 1.6.4 2.5.4a10 10 0 1 0 0-20z" />
    </svg>
  );
}
