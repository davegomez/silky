import React from 'react';
import serializer, { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import { css } from '@emotion/core';
import { Path } from '../src';

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);
afterEach(cleanup);

const d =
  'M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z';

test('Path', () => {
  const { container } = render(
    <svg>
      <Path d={d} />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('silky-path')).toBe(true);
  expect(path.getAttribute('d')).toBe(d);
});

test('Path with custom class', () => {
  const { container } = render(
    <svg>
      <Path className="foo" d={d} />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('silky-path')).toBe(true);
  expect(path.classList.contains('foo')).toBe(true);
});

test('Path with Emotion', () => {
  const styles = css`
    color: black;
  `;
  const { container } = render(
    <svg>
      <Path css={styles} d={d} />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('silky-path')).toBe(true);
  expect(path).toHaveStyleRule('color', 'black');
});

test('Path with pathLength', () => {
  const { container } = render(
    <svg>
      <Path d={d} pathLength={2} />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('silky-path')).toBe(true);
  expect(path.getAttribute('pathLength')).toBe('2');
});
