// @flow
import React from 'react';
import { join, getTransform } from '../../utils';
import type { CSS, Transform } from '../../utils/types';

type Props = {
  children: any,
  className?: string,
  classNames?: [string],
  css?: CSS,
  transform?: Transform,
};

export default function Group({
  children,
  className,
  classNames = [''],
  css,
  transform,
  ...restProps
}: Props) {
  return (
    <g
      className={join(['silky-group', className, ...classNames], ' ')}
      css={css}
      transform={getTransform(transform)}
      {...restProps}
    >
      {children}
    </g>
  );
}
