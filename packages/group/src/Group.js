import React from 'react';

export default function Group({ children, className }) {
  return <g className={`silky-group ${className}`}>{children}</g>;
}
