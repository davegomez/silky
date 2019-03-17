import React from 'react';
import serializer, { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import { css } from '@emotion/core';
import { Line } from '../src';

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);
afterEach(cleanup);

test('Line', () => {
  const { container } = render(
    <svg>
      <Line x1={0} y1={80} x2={100} y2={20} stroke="#AABBCC" />
    </svg>
  );

  const line = container.querySelector('line');
  expect(line).toMatchSnapshot();
  expect(line.classList.contains('silky-line')).toBe(true);
  expect(line.getAttribute('x1')).toBe('0');
  expect(line.getAttribute('x2')).toBe('100');
  expect(line.getAttribute('y1')).toBe('80');
  expect(line.getAttribute('y2')).toBe('20');
  expect(line.getAttribute('stroke')).toBe('#AABBCC');
});

test('Line with custom class', () => {
  const { container } = render(
    <svg>
      <Line
        x1="10%"
        y1="10%"
        x2="80%"
        y2="80%"
        stroke="black"
        className="foo"
      />
    </svg>
  );

  const line = container.querySelector('line');
  expect(line).toMatchSnapshot();
  expect(line.classList.contains('silky-line')).toBe(true);
  expect(line.getAttribute('x1')).toBe('10%');
  expect(line.getAttribute('x2')).toBe('80%');
  expect(line.getAttribute('y1')).toBe('10%');
  expect(line.getAttribute('y2')).toBe('80%');
  expect(line.getAttribute('stroke')).toBe('black');
  expect(line.classList.contains('foo')).toBe(true);
});

test('Line with Emotion', () => {
  const styles = css`
    stroke: black;
  `;
  const { container } = render(
    <svg>
      <Line x1={0} y1={80} x2={100} y2={20} css={styles} />
    </svg>
  );

  const line = container.querySelector('line');
  expect(line).toMatchSnapshot();
  expect(line.classList.contains('silky-line')).toBe(true);
  expect(line).toHaveStyleRule('stroke', 'black');
});

test('Line with pathLength', () => {
  const { container } = render(
    <svg>
      <Line x1="10%" y1="10%" x2="80%" y2="80%" stroke="black" pathLength={2} />
    </svg>
  );

  const line = container.querySelector('line');
  expect(line).toMatchSnapshot();
  expect(line.classList.contains('silky-line')).toBe(true);
  expect(line.getAttribute('pathLength')).toBe('2');
});
