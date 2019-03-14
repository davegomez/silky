// @flow
export type CSS = {
  map: string,
  name: string,
  styles: string,
};

export type Transform = {
  matrix?: [number],
  rotate?: number | string,
  scale?: number | [number],
  skew?: string | [string],
  translate?: [number | string],
};
