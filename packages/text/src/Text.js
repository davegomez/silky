// @flow
import React from 'react';
import { getTransform } from '../../utils';
import type { CSS, Transform } from '../../utils/types';

type Props = {
  children: any,
  className?: string,
  css?: CSS,
  dx?: number | string,
  dy?: number | string,
  lengthAdjust?: 'spacing' | 'spacingAndGlyphs',
  transform?: Transform,
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
  transform,
  textLength,
  x,
  y,
  ...restProps
}: Props) {
  return (
    <text
      className={`silky-text ${className}`}
      css={css}
      dx={dx}
      dy={dy}
      lengthAdjust={lengthAdjust}
      textLength={textLength}
      transform={getTransform(transform)}
      x={x}
      y={y}
      {...restProps}
    >
      {children}
    </text>
  );
}
