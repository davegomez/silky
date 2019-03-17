// @flow
import React from 'react';
import type { CSS } from '../../utils/types';

type Props = {
  className?: string,
  css?: CSS,
  x1: number | string,
  x2?: number | string,
  y1: number | string,
  y2?: number | string,
  pathLength?: number,
};

export default function Line({
  className = '',
  css,
  x1,
  x2,
  y1,
  y2,
  pathLength,
  ...restProps
}: Props) {
  return (
    <line
      className={`silky-line ${className}`}
      css={css}
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      pathLength={pathLength}
      {...restProps}
    />
  );
}
