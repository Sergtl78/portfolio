import React, { SVGProps } from "react";

export default function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.7 17.925q-.35.2-.625-.062T12 17.25L14.425 13H3q-.425 0-.712-.288T2 12q0-.425.288-.712T3 11h11.425L12 6.75q-.2-.35.075-.612t.625-.063l7.975 5.075q.475.3.475.85t-.475.85z"
      ></path>
    </svg>
  );
}

