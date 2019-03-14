import React from 'react';
import serializer, { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import { css } from '@emotion/core';
import { Group } from '../src';

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);
afterEach(cleanup);

test('G', () => {
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

test('Group width transform translate', () => {
  const { container } = render(
    <svg>
      <Group transform={{ left: 10, top: 10 }}>foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-group')).toBe(true);
  expect(group.getAttribute('transform')).toEqual('translate(10, 10) ');
  expect(group.innerHTML).toBe('foo');
});

test('Group width transform rotate', () => {
  const { container } = render(
    <svg>
      <Group transform={{ rotation: '10 20, 30' }}>foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-group')).toBe(true);
  expect(group.getAttribute('transform')).toEqual(' rotate(10 20, 30)');
  expect(group.innerHTML).toBe('foo');
});

test('Group width transform translate and rotate', () => {
  const { container } = render(
    <svg>
      <Group transform={{ left: 10, top: 10, rotation: 90 }}>foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-group')).toBe(true);
  expect(group.getAttribute('transform')).toEqual(
    'translate(10, 10) rotate(90)'
  );
  expect(group.innerHTML).toBe('foo');
});
