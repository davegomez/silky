import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Group } from '../src';

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

test('Group width custom position', () => {
  const { container } = render(
    <svg>
      <Group position={{ left: 10, top: 10 }}>foo</Group>
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.getAttribute('transform')).toEqual('translate(10, 10)');
  expect(group.innerHTML).toBe('foo');
});
