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
      d="M9.558 2.058A.625.625 0 0 1 10 1.875a8.125 8.125 0 1 1-7.037 4.063.625.625 0 0 1 .853-.23l3.79 2.188a.625.625 0 0 1 .228.854A2.5 2.5 0 1 0 10 7.5a.625.625 0 0 1-.625-.625V2.5c0-.166.066-.325.183-.442Zm-.183 11.64A3.75 3.75 0 0 1 6.59 11.56l-3.042.815a6.875 6.875 0 0 0 5.827 4.47v-3.148Zm1.25 3.148v-3.149a3.748 3.748 0 0 0 2.997-4.667 3.75 3.75 0 0 0-2.997-2.727v-3.15a6.875 6.875 0 0 1 0 13.694Zm-7.4-5.678 3.041-.814a3.75 3.75 0 0 1 .219-1.661L3.757 7.118a6.875 6.875 0 0 0-.533 4.05Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as FinanceIcon };
