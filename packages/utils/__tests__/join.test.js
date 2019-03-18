import { join } from '../';

test('join with comma', () => {
  expect(join(['foo', 'bar'])).toEqual('foo, bar');
});

test('join with space', () => {
  expect(join(['foo', 'bar'], ' ')).toEqual('foo bar');
});

test('join with hyphens', () => {
  expect(join(['foo', 'bar'], '-')).toEqual('foo-bar');
});
