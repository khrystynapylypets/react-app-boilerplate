const config = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-trim': [2, 'always'],
        'type-enum': [
            2,
            'always',
            ['feature', 'fix'],
        ],
        'subject-case': [2, 'never', ['sentence-case', 'start-case']],
        'subject-min-length': [2, 'always', 10]
    },
};

export default config;
