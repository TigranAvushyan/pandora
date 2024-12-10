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
      d="M2.5 3.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V3.75Zm13.75 0H3.75v12.5h12.5V3.75Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.75 1.25c.345 0 .625.28.625.625v2.5a.625.625 0 1 1-1.25 0v-2.5c0-.345.28-.625.625-.625ZM6.25 1.25c.345 0 .625.28.625.625v2.5a.625.625 0 1 1-1.25 0v-2.5c0-.345.28-.625.625-.625ZM2.5 6.875c0-.345.28-.625.625-.625h13.75a.625.625 0 1 1 0 1.25H3.125a.625.625 0 0 1-.625-.625Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 11.25a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM13.438 11.25a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM6.563 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM10 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM13.438 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as CalendarIcon };
