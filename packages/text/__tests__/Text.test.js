import React from 'react';
import serializer, { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import { css } from '@emotion/core';
import { Text } from '../src';

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);
afterEach(cleanup);

test('Text', () => {
  const { container } = render(
    <svg>
      <Text>foo</Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.innerHTML).toBe('foo');
});

test('Text with custom class', () => {
  const { container } = render(
    <svg>
      <Text className="foo">foo</Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.classList.contains('foo')).toBe(true);
  expect(text.innerHTML).toBe('foo');
});

test('Text with Emotion', () => {
  const styles = css`
    fill: black;
  `;
  const { container } = render(
    <svg>
      <Text css={styles}>foo</Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text).toHaveStyleRule('fill', 'black');
  expect(text.innerHTML).toBe('foo');
});

test('Text with horizontal and vertical text shift', () => {
  const { container } = render(
    <svg>
      <Text dx={10} dy={10}>
        foo
      </Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.getAttribute('dx')).toBe('10');
  expect(text.getAttribute('dy')).toBe('10');
  expect(text.innerHTML).toBe('foo');
});

test('Text with lengthAdjust:spacing', () => {
  const { container } = render(
    <svg>
      <Text lengthAdjust="spacing">foo</Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.getAttribute('lengthAdjust')).toBe('spacing');
  expect(text.innerHTML).toBe('foo');
});

test('Text with lengthAdjust:spacingAndGlyphs', () => {
  const { container } = render(
    <svg>
      <Text lengthAdjust="spacingAndGlyphs">foo</Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.getAttribute('lengthAdjust')).toBe('spacingAndGlyphs');
  expect(text.innerHTML).toBe('foo');
});

test('Text with textLength', () => {
  const { container } = render(
    <svg>
      <Text textLength="10%">foo</Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.getAttribute('textLength')).toBe('10%');
  expect(text.innerHTML).toBe('foo');
});

test('Text with x and y coordinates', () => {
  const { container } = render(
    <svg>
      <Text x={10} y={10}>
        foo
      </Text>
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('silky-text')).toBe(true);
  expect(text.getAttribute('x')).toBe('10');
  expect(text.getAttribute('y')).toBe('10');
  expect(text.innerHTML).toBe('foo');
});
