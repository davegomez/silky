module.exports = function(wallaby) {
  return {
    files: [
      'packages/**/*.js',
      'packages/**/__@(mocks|fixtures)__/*.js',
      '!packages/**/__tests__/*.js',
      '!packages/**/node_modules/**',
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
