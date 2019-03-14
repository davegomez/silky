// @flow
import React from 'react';

type CSS = {
  map: string,
  name: string,
  styles: string,
};

type Adjust = 'spacing' | 'spacingAndGlyphs';

type Props = {
  children: any,
  className?: string,
  css?: CSS,
  dx?: number | string,
  dy?: number | string,
  lengthAdjust?: Adjust,
  transform?: {
    left?: number,
    top?: number,
    rotation?: number | string,
  },
  textLength?: number | string,
  x?: number | string,
  y?: number | string,
};

export default function Text({
  children,
  className = '',
  css,
  dx,
  dy,
  lengthAdjust,
  transform = {},
  textLength,
  x,
  y,
  ...restProps
}: Props) {
  var { left, rotation, top } = transform;
  var translate = left && top ? `translate(${left}, ${top})` : '';
  var rotate = rotation ? `rotate(${rotation})` : '';

  return (
    <text
      className={`silky-text ${className}`}
      css={css}
      dx={dx}
      dy={dy}
      lengthAdjust={lengthAdjust}
      textLength={textLength}
      transform={`${translate} ${rotate}`}
      x={x}
      y={y}
      {...restProps}
    >
      {children}
    </text>
  );
}
