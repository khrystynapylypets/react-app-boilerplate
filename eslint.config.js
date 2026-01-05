import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      },
    },
  },
);
