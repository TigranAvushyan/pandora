import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25em"
    height="1.25em"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.125 4.375c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25h-3.75c-.69 0-1.25-.56-1.25-1.25v-3.75Zm5 0h-3.75v3.75h3.75v-3.75Zm2.5 0c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25h-3.75c-.69 0-1.25-.56-1.25-1.25v-3.75Zm5 0h-3.75v3.75h3.75v-3.75Zm-12.5 7.5c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25h-3.75c-.69 0-1.25-.56-1.25-1.25v-3.75Zm5 0h-3.75v3.75h3.75v-3.75Zm2.5 0c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25h-3.75c-.69 0-1.25-.56-1.25-1.25v-3.75Zm5 0h-3.75v3.75h3.75v-3.75Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as ServicesIcon };
