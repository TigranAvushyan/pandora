import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 3.125a6.875 6.875 0 1 0 0 13.75 6.875 6.875 0 0 0 0-13.75ZM1.875 10a8.125 8.125 0 1 1 16.25 0 8.125 8.125 0 0 1-16.25 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 5.625c.345 0 .625.28.625.625v4.375a.625.625 0 1 1-1.25 0V6.25c0-.345.28-.625.625-.625Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as WarningCircle };
