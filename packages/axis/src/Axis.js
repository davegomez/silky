// @flow
import React from 'react';
import type { CSS } from '../../utils/types';
import { Group } from '@silky/group';

type Props = {
  className?: string,
  css?: CSS,
  position: string,
};

export default function Text({ className = '', css, position }: Props) {
  return (
    <Group className={`silky-axis axis-${position} ${className}`} css={css}>
      {/* Test */}
    </Group>
  );
}
