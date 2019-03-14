// @flow
import React from 'react';
import { getTransform } from '../../utils';
import type { CSS, Transform } from '../../utils/types';

type Props = {
  children: any,
  className?: string,
  css?: CSS,
  transform?: Transform,
};

export default function Group({
  children,
  className = '',
  css,
  transform,
  ...restProps
}: Props) {
  return (
    <g
      className={`silky-group ${className}`}
      css={css}
      transform={getTransform(transform)}
      {...restProps}
    >
      {children}
    </g>
  );
}
