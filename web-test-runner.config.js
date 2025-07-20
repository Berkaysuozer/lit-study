export default {
  files: 'test/**/*_test.js',
  nodeResolve: true,
  testFramework: {
    name: '@web/test-runner-mocha',
    options: {
      ui: 'bdd',
    },
  },
}; 