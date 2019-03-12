module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    [
      'emotion',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
  ],
};
