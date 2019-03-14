import { getTransform } from '../';

test('getTransform', () => {
  expect(getTransform({})).toEqual(null);
});

test('getTransform with matrix', () => {
  expect(getTransform({ matrix: [1, 2, 3, 4] })).toEqual('matrix(1, 2, 3, 4)');
});

test('getTransform with rotate', () => {
  expect(getTransform({ rotate: 90 })).toEqual('rotate(90)');
  expect(getTransform({ rotate: '50%' })).toEqual('rotate(50%)');
});

test('getTransform with scale', () => {
  expect(getTransform({ scale: 50 })).toEqual('scale(50)');
  expect(getTransform({ scale: [20, 30] })).toEqual('scale(20, 30)');
});

test('getTransform with skew', () => {
  expect(getTransform({ skew: '90deg' })).toEqual('skew(90deg)');
  expect(getTransform({ skew: ['90deg', '45deg'] })).toEqual(
    'skew(90deg, 45deg)'
  );
});

test('getTransform with translate', () => {
  expect(getTransform({ translate: [10, 20] })).toEqual('translate(10, 20)');
  expect(getTransform({ translate: ['10%', '20%'] })).toEqual(
    'translate(10%, 20%)'
  );
});

test('getTransform with rotate and translate', () => {
  expect(getTransform({ rotate: 90, translate: [10, 20] })).toEqual(
    'rotate(90) translate(10, 20)'
  );
});
