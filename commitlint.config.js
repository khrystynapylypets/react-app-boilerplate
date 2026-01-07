const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-trim': [2, 'always'],
    'type-enum': [
      2,
      'always',
      ['feature', 'fix'],
    ],
    'subject-case': [2, 'always', ['sentence-case', 'start-case']],
    'subject-min-length': [2, 'always', 10]
  },
  plugins: [
    {
      rules: {
        'type-empty': (data) => {
          if (!data.type) {
            return [false, 'Commit message must start with "feature: ", "fix: ". Example: "feature: Webpack dev config"']
          }

          return [true];
        },
        'subject-empty': ({ subject }) => {
          if (!subject) {
            return [false, 'Commit message must include description after issue number. Example: "feature: Webpack dev config"']
          }

          return [true];
        }
      }
    }
  ]
};


export default config;
