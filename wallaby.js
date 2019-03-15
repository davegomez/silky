module.exports = function(wallaby) {
  return {
    files: [
      'packages/**/*.js',
      'packages/**/__@(mocks|fixtures)__/*.js',
      '!packages/**/__tests__/*.js',
      '!packages/**/node_modules/**',
      '!packages/**/@(cjs|esm|umd)/**',
    ],

    tests: ['packages/**/__tests__/*.js', '!packages/**/node_modules/**'],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    testFramework: 'jest',
  };
};
