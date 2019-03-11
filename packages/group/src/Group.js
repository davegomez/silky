// @flow
import React from 'react';

type props = {
  children: any,
  className: string,
  position: {
    left: number,
    top: number,
  },
};

export default function Group({
  children,
  className,
  position: { left = 0, top = 0 } = {},
  ...restProps
}: props) {
  return (
    <g
      className={`silky-group ${className}`}
      transform={`translate(${left}, ${top})`}
      {...restProps}
    >
      {children}
    </g>
  );
}
