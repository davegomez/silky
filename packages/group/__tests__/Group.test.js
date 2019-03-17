import React from 'react';
import serializer, { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import { css } from '@emotion/core';
import { Group } from '../src';

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);
afterEach(cleanup);

test('Group', () => {
  const { container } = render(
    <svg>
      <Group>foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-group')).toBe(true);
  expect(group.innerHTML).toBe('foo');
});

test('Group with custom class', () => {
  const { container } = render(
    <svg>
      <Group className="foo">foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-group')).toBe(true);
  expect(group.classList.contains('foo')).toBe(true);
  expect(group.innerHTML).toBe('foo');
});

test('Group with Emotion', () => {
  const styles = css`
    color: black;
  `;
  const { container } = render(
    <svg>
      <Group css={styles}>foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-group')).toBe(true);
  expect(group).toHaveStyleRule('color', 'black');
  expect(group.innerHTML).toBe('foo');
});
