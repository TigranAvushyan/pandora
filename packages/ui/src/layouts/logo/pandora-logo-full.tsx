import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width="114"
    height="16"
    viewBox="0 0 114 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M97.2041 14.9347H92.5825V0.680176H97.2041V14.9347Z"
      fill="currentColor"
    />
    <path
      d="M107.473 14.9347H101.502C100.793 14.9347 100.241 14.7379 99.8456 14.3442C99.4502 13.9505 99.2526 13.4007 99.2526 12.6947V2.92018C99.2526 2.21424 99.4502 1.66442 99.8456 1.27072C100.241 0.877025 100.793 0.680176 101.502 0.680176H107.473C109.75 0.680176 111.325 1.23678 112.197 2.34999C113.083 3.44963 113.526 5.26878 113.526 7.80745C113.526 10.3461 113.083 12.1721 112.197 13.2853C111.325 14.3849 109.75 14.9347 107.473 14.9347ZM103.874 5.24163V10.3733C103.874 10.7398 103.949 11.0045 104.099 11.1674C104.263 11.3168 104.529 11.3914 104.897 11.3914H105.101C106.573 11.3914 107.555 11.1674 108.046 10.7194C108.537 10.2714 108.782 9.30078 108.782 7.80745C108.782 6.35484 108.516 5.39775 107.984 4.93618C107.466 4.46102 106.505 4.22345 105.101 4.22345H104.897C104.529 4.22345 104.263 4.3049 104.099 4.46781C103.949 4.61715 103.874 4.87509 103.874 5.24163Z"
      fill="currentColor"
    />
    <path
      d="M1.33314 15.1604V3.5188C1.33314 2.92402 1.41416 2.10457 1.90583 1.55214C2.21335 1.20411 2.82655 0.813721 3.81172 0.813721H11.7428C12.8919 0.813721 13.9562 0.957355 14.7554 1.81731C15.4331 2.53363 15.8216 3.66059 15.8216 5.73038C15.8216 6.7358 15.7406 9.19413 14.5289 10.2401C13.8531 10.8128 12.7869 11.019 12.008 11.019H5.96253V15.1586H1.3313L1.33314 15.1604ZM9.28449 7.45396C9.85718 7.45396 10.4317 7.49632 10.8203 7.08568C11.0468 6.83892 11.1885 6.42828 11.1885 5.83534C11.1885 5.46705 11.148 5.01589 10.7797 4.70837C10.3894 4.38059 9.85718 4.3806 9.325 4.3806H6.76356C6.02698 4.3806 5.96437 4.91462 5.96437 5.2203V7.45396H9.28449Z"
      fill="currentColor"
    />
    <path
      d="M24.1191 4.29932C25.4523 4.29932 26.3344 4.77072 26.8058 5.24213C27.7081 6.12419 27.8296 7.41503 27.8296 8.29524V12.8454C27.8296 13.42 27.7891 14.0755 27.2974 14.5875C26.7855 15.1215 26.0674 15.1601 25.4542 15.1601H19.0607C18.3849 15.1601 17.6464 15.1196 17.0719 14.5875C16.2322 13.8288 16.1899 12.3943 16.1899 11.5343C16.1899 10.5915 16.2727 9.44431 17.1327 8.78691C17.7275 8.33576 18.4217 8.3155 19.0588 8.3155H23.8134V8.15161C23.8134 7.96563 23.795 7.6802 23.609 7.43345C23.2997 7.02465 22.7896 7.00255 22.3789 7.00255H16.9283V4.29932H24.1209H24.1191ZM20.9629 10.8972C20.8395 10.8972 20.5541 10.9175 20.3699 11.0813C20.2263 11.225 20.206 11.411 20.206 11.5951C20.206 11.7572 20.2263 11.9229 20.3699 12.0647C20.5136 12.1881 20.7401 12.2507 20.9242 12.2507H23.0142C23.2205 12.2507 23.4857 12.2083 23.609 12.107C23.795 11.9652 23.8134 11.759 23.8134 11.573V10.8972H20.9647H20.9629Z"
      fill="currentColor"
    />
    <path
      d="M29.0597 6.24572C29.0597 5.83692 29.0799 5.325 29.509 4.91436C30.124 4.29932 31.2105 4.29932 31.8863 4.29932H35.6576C36.9079 4.29932 38.1988 4.38034 39.3036 5.26239C40.5135 6.22546 40.6571 7.53657 40.6571 8.47939V15.1601H36.6409V9.64686C36.6409 8.89003 36.5783 8.27499 36.1898 7.78332C35.8417 7.33217 35.3482 7.12777 34.5288 7.12777H33.8125C33.6486 7.12777 33.4221 7.14803 33.2582 7.29166C33.0556 7.47581 33.0759 7.70046 33.0759 7.9067V15.162H29.0597V6.24756V6.24572Z"
      fill="currentColor"
    />
    <path
      d="M53.1605 0.81543V12.8658C53.1605 13.3372 53.0979 14.0149 52.8125 14.4237C52.3411 15.1216 51.5419 15.1621 50.9471 15.1621H45.5572C43.8778 15.1621 42.6901 14.4237 42.1358 13.0721C41.7049 12.0464 41.6441 10.7961 41.6441 9.46469C41.6441 8.13333 41.7049 6.88298 42.4433 5.83704C43.3861 4.50384 44.9237 4.29944 46.0507 4.29944H49.1462V0.81543H53.1624H53.1605ZM47.3821 7.08738C46.7265 7.08738 46.3159 7.41516 46.0912 7.74294C45.7008 8.29537 45.6603 9.09456 45.6603 9.68934C45.6603 10.7132 45.7634 11.227 45.9476 11.5731C46.3159 12.2913 47.034 12.3723 47.3821 12.3723H48.3451C48.7355 12.3723 48.8994 12.2508 48.9399 12.2084C49.1462 12.0243 49.1462 11.6339 49.1462 11.47V7.08554H47.3821V7.08738Z"
      fill="currentColor"
    />
    <path
      d="M65.2515 5.28273C66.605 6.49256 66.686 8.64337 66.686 9.72982C66.686 10.8163 66.605 12.9671 65.2515 14.1769C64.0638 15.2228 62.1358 15.2836 60.4159 15.2836C58.696 15.2836 56.7661 15.2228 55.5784 14.1769C54.2249 12.9671 54.1439 10.8163 54.1439 9.72982C54.1439 8.64337 54.2249 6.49256 55.5784 5.28273C56.7661 4.23864 58.6923 4.17603 60.4159 4.17603C62.1395 4.17603 64.0619 4.23864 65.2515 5.28273ZM58.6315 11.6357C58.7144 11.7591 59.1839 12.3741 60.4159 12.3741C61.5005 12.3741 61.9921 11.9027 62.1763 11.6357C62.5059 11.1846 62.5851 10.5106 62.5851 9.72982C62.5851 8.5826 62.4009 8.07068 62.1965 7.78341C61.9921 7.51824 61.5207 7.08735 60.4159 7.08735C59.311 7.08735 58.8359 7.51824 58.6315 7.78341C58.4879 7.98781 58.243 8.45922 58.243 9.72982C58.243 10.9175 58.4676 11.4111 58.6315 11.6357Z"
      fill="currentColor"
    />
    <path
      d="M67.6693 8.86977C67.6693 7.82383 67.7522 6.30649 68.9602 5.325C70.1497 4.34167 71.9101 4.29932 72.9782 4.29932H75.6428V7.12777H74.2488C73.4698 7.12777 72.7333 7.23089 72.2195 7.9067C71.7499 8.54016 71.6873 9.36144 71.6873 9.97648V15.1601H67.6693V8.86977Z"
      fill="currentColor"
    />
    <path
      d="M83.942 4.29932C85.2734 4.29932 86.1536 4.77072 86.625 5.24213C87.5273 6.12603 87.6507 7.41503 87.6507 8.29524V12.8454C87.6507 13.42 87.6084 14.0755 87.1167 14.5875C86.6029 15.1215 85.8866 15.1601 85.2716 15.1601H78.8781C78.2023 15.1601 77.4639 15.1196 76.8912 14.5875C76.0515 13.8288 76.0109 12.3943 76.0109 11.5343C76.0109 10.5915 76.092 9.44431 76.9538 8.78691C77.5467 8.33576 78.2446 8.3155 78.8799 8.3155H83.6364V8.15161C83.6364 7.96563 83.6161 7.6802 83.432 7.43345C83.1226 7.02465 82.6107 7.00255 82.2019 7.00255H76.7494V4.29932H83.9439H83.942ZM80.7858 10.8972C80.6624 10.8972 80.3752 10.9175 80.1929 11.0813C80.0474 11.225 80.0271 11.411 80.0271 11.5951C80.0271 11.7572 80.0474 11.9229 80.1929 12.0647C80.3347 12.1881 80.5593 12.2507 80.7453 12.2507H82.8353C83.0416 12.2507 83.3068 12.2083 83.4301 12.107C83.6143 11.9652 83.6345 11.759 83.6345 11.573V10.8972H80.7858Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as PandoraLogoFull };
