// @flow
import React from 'react';
import type { CSS } from '../../utils/types';

type Props = {
  className?: string,
  css?: CSS,
  d: string,
  pathLength?: number,
};

export default function Path({
  className = '',
  css,
  d,
  pathLength,
  ...restProps
}: Props) {
  return (
    <path
      className={`silky-path ${className}`}
      css={css}
      d={d}
      pathLength={pathLength}
      {...restProps}
    />
  );
}
