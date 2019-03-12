import { readdirSync } from 'fs';
import path from 'path';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
];

const env = process.env.NODE_ENV;

const cssOptions = {
  sourceMap: true,
  autoLabel: env !== 'production',
  labelFormat: '[local]',
  cssPropOptimization: true,
};

const getChunks = URI =>
  readdirSync(path.resolve(URI))
    .filter(x => x.includes('.js'))
    .reduce((a, c) => ({ ...a, [c.replace('.js', '')]: `src/${c}` }), {});

const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return;
  }

  // eslint-disable-next-line no-console
  console.error(warning);
};

const commonPlugins = () => [
  clear({
    targets: ['cjs', 'esm', 'umd'],
  }),
  external({
    includeDependencies: true,
  }),
  babel({
    babelrc: false,
    presets: [
      ['@babel/preset-env', { modules: false }],
      '@babel/preset-flow',
      '@babel/preset-react',
      '@emotion/babel-preset-css-prop',
    ],
    plugins: [['emotion', cssOptions]],
    extensions: EXTENSIONS,
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: /node_modules/,
  }),
  replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  resolve({
    extensions: EXTENSIONS,
    preferBuiltins: false,
  }),
];

export default function(name) {
  return [
    {
      onwarn: discardWarning,
      input: 'src/index.js',
      output: {
        esModule: false,
        file: pkg.unpkg,
        format: 'umd',
        name,
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [...commonPlugins(), env === 'production' && terser()],
    },
    {
      onwarn: discardWarning,
      input: getChunks('src'),
      output: [
        { dir: 'esm', format: 'esm', sourcemap: true },
        { dir: 'cjs', format: 'cjs', exports: 'named', sourcemap: true },
      ],
      plugins: commonPlugins(),
    },
  ];
}
