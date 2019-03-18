// @flow
export default function join(xs: [any], separator: string = ', '): string {
  return xs.join(separator);
}
