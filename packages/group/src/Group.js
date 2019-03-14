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
  transform?: {
    left?: number,
    top?: number,
    rotation?: number | string,
  },
};

export default function Group({
  children,
  className = '',
  css,
  transform = {},
  ...restProps
}: Props) {
  var { left, rotation, top } = transform;
  var translate = left && top ? `translate(${left}, ${top})` : '';
  var rotate = rotation ? `rotate(${rotation})` : '';

  return (
    <g
      className={`silky-group ${className}`}
      css={css}
      transform={`${translate} ${rotate}`}
      {...restProps}
    >
      {children}
    </g>
  );
}
