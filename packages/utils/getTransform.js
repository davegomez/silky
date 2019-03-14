// @flow
import type { Transform } from './types';

// Will take the transform object and return the correct transform attribute
// value based on the passed object properties
export default function getTransform(transform: Transform = {}) {
  var { matrix, rotate, scale, skew, translate } = transform;
  var join = x => x.join(', ');
  var attrs = [];

  matrix && attrs.push(`matrix(${join(matrix)})`);
  rotate && attrs.push(`rotate(${rotate})`);
  scale &&
    attrs.push(`scale(${typeof scale === 'number' ? scale : join(scale)})`);
  skew && attrs.push(`skew(${typeof skew === 'string' ? skew : join(skew)})`);
  translate && attrs.push(`translate(${join(translate)})`);

  return attrs.length ? attrs.join(' ') : null;
}
