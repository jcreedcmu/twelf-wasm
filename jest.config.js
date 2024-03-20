module.exports = {
  transform: {
    '^.+\\.ts?$':
    ['ts-jest',
     {
       isolatedModules: true,
     }
    ]
  },
  testEnvironment: 'node',
  globals: {
    devicePixelRatio: 1,
  },
  testRegex: '/tests/test-.*\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
