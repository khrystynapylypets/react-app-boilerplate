import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintReact from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default defineConfig(
  {
    ignores: ['dist', 'build', 'coverage', 'node_modules']
  },
  eslint.configs.recommended,
  eslintReact.configs['recommended-typescript'],
  reactHooks.configs.flat.recommended,
  {
    settings: {
      react: { version: 'detect' },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
  {
    rules: {
      'no-duplicate-imports': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',

      'arrow-body-style': 'error',

      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['camelCase', 'PascalCase'],
          prefix: ['is', 'are', 'should', 'has', 'have', 'can', 'did', 'will']
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'variable',
          modifiers: ['exported'],
          format: ['camelCase', 'PascalCase']
        },
        {
          selector: 'class',
          format: ['PascalCase']
        },
        {
          selector: 'parameter',
          modifiers: ['unused'],
          format: ['camelCase'],
          leadingUnderscore: 'allow'
        },
        {
          selector: ['typeAlias', 'interface', 'typeParameter'],
          format: ['PascalCase'],
          prefix: ['T']
        },
        {
          selector: 'variableLike',
          format: ['camelCase']
        },
      ],

      curly: ['error', 'multi', 'consistent'],
      'default-case-last': 'error',
      'default-param-last': 'error',

      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['error', { allowKeywords: false }],

      eqeqeq: 'error',
      'max-depth': 'error',
      'max-params': 'error',
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-else-return': 'error',

      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],

      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-return-assign': 'error',
      'no-sequences': ['error', { allowInParentheses: false }],
      'no-unneeded-ternary': 'error',
      'no-useless-concat': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-return': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'no-param-reassign': 'error',

      'no-restricted-syntax': [
        'error',
        {
          selector:
            'ExportNamedDeclaration > :matches(Declaration, TSTypeAliasDeclaration, TSInterfaceDeclaration)',
          message:
            'Do not export declarations inline. Declare them first and use `export { name }`.',
        },
        {
          selector: 'TSEnumDeclaration',
          message: 'Do not use enums. Use union types or const objects instead.'
        },
        {
          selector: `ImportDeclaration[source.value=/^((?:\\.\\u002F)|(?:\\.\\.\\u002F)){4,}/]`,
          message: 'Avoid imports that go up more than 3 directories. Use path aliases.',
        }
      ],
    }
  }
);
