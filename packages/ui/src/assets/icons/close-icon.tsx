import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 3.125a6.875 6.875 0 1 0 0 13.75 6.875 6.875 0 0 0 0-13.75ZM1.875 10a8.125 8.125 0 1 1 16.25 0 8.125 8.125 0 0 1-16.25 0Zm5.183-2.942a.625.625 0 0 1 .884 0L10 9.116l2.058-2.058a.625.625 0 1 1 .884.884L10.884 10l2.058 2.058a.625.625 0 1 1-.884.884L10 10.884l-2.058 2.058a.625.625 0 1 1-.884-.884L9.116 10 7.058 7.942a.625.625 0 0 1 0-.884Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as CloseIcon };
