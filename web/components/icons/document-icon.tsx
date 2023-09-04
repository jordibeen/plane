import React from "react";

import type { Props } from "./types";

export const DocumentIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  className,
  color,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M7.27051 14.792H12.7288C12.9094 14.792 13.0587 14.733 13.1768 14.6149C13.2948 14.4969 13.3538 14.3475 13.3538 14.167C13.3538 13.9864 13.2948 13.8371 13.1768 13.7191C13.0587 13.601 12.9094 13.542 12.7288 13.542H7.27051C7.08995 13.542 6.94065 13.601 6.82259 13.7191C6.70454 13.8371 6.64551 13.9864 6.64551 14.167C6.64551 14.3475 6.70454 14.4969 6.82259 14.6149C6.94065 14.733 7.08995 14.792 7.27051 14.792ZM7.27051 11.2503H12.7288C12.9094 11.2503 13.0587 11.1913 13.1768 11.0732C13.2948 10.9552 13.3538 10.8059 13.3538 10.6253C13.3538 10.4448 13.2948 10.2955 13.1768 10.1774C13.0587 10.0594 12.9094 10.0003 12.7288 10.0003H7.27051C7.08995 10.0003 6.94065 10.0594 6.82259 10.1774C6.70454 10.2955 6.64551 10.4448 6.64551 10.6253C6.64551 10.8059 6.70454 10.9552 6.82259 11.0732C6.94065 11.1913 7.08995 11.2503 7.27051 11.2503ZM4.58301 18.3337C4.24967 18.3337 3.95801 18.2087 3.70801 17.9587C3.45801 17.7087 3.33301 17.417 3.33301 17.0837V2.91699C3.33301 2.58366 3.45801 2.29199 3.70801 2.04199C3.95801 1.79199 4.24967 1.66699 4.58301 1.66699H11.583C11.7497 1.66699 11.9129 1.70171 12.0726 1.77116C12.2323 1.8406 12.3677 1.93088 12.4788 2.04199L16.2913 5.85449C16.4025 5.9656 16.4927 6.10102 16.5622 6.26074C16.6316 6.42046 16.6663 6.58366 16.6663 6.75033V17.0837C16.6663 17.417 16.5413 17.7087 16.2913 17.9587C16.0413 18.2087 15.7497 18.3337 15.4163 18.3337H4.58301ZM11.4788 6.16699V2.91699H4.58301V17.0837H15.4163V6.79199H12.1038C11.9233 6.79199 11.774 6.73296 11.6559 6.61491C11.5379 6.49685 11.4788 6.34755 11.4788 6.16699ZM4.58301 2.91699V6.79199V2.91699V17.0837V2.91699Z"
    />
  </svg>
);