export const mockNpmPackageList = {
  name: 'vite-project',
  private: true,
  version: '0.0.1',
  type: 'module',
  engines: {node: '>=18.0.0'},
  scripts: {},
  dependencies: {
    '@cypress/webpack-dev-server': '^3.4.1',
    '@emotion/react': '^11.10.5',
    '@emotion/styled': '^11.10.5',
  },
  devDependencies: {},
  'lint-staged': {
    'src/**/*.{ts,tsx}': ['npm run groot:prettier', 'npm run groot:lint'],
  },
  jest: {},
  analyzer: {
    filesEnvironment: ['.ts', '.tsx', '.js', '.jsx'],
    gitHubAuthKey: 'XXXXXXXXX',
  },
};
