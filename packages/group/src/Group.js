// @flow
import React from 'react';

type CSS = {
  map: string,
  name: string,
  styles: string,
};

type Props = {
  children: any,
  className?: string,
  css?: CSS,
  position?: {
    left: number,
    top: number,
  },
};

export default function Group({
  children,
  className = '',
  css,
  position,
  ...restProps
}: Props) {
  return (
    <g
      className={`silky-group ${className}`}
      css={css}
      transform={position && `translate(${position.left}, ${position.top})`}
      {...restProps}
    >
      {children}
    </g>
  );
}
