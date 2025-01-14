import tsEslint from 'typescript-eslint';
import 'eslint-plugin-only-warn';
import {configs as wcConfigs} from 'eslint-plugin-wc';
import {configs as litConfigs} from 'eslint-plugin-lit';
import {configs as regexpConfigs} from 'eslint-plugin-regexp';
import sonarJs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import airbnbTs from 'eslint-config-airbnb-typescript-x/base';
import globals from 'globals';

export default tsEslint.config(
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
  ...airbnbTs,
  wcConfigs['flat/recommended'],
  wcConfigs['flat/best-practice'],
  litConfigs['flat/recommended'],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  regexpConfigs['flat/recommended'],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  sonarJs.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        projectService: true,
        // @ts-ignore
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'capitalized-comments': 'off',
      'class-methods-use-this': 'off',
      'func-names': 'off',
      'new-cap': ['error', {capIsNewExceptions: ['Stream'], properties: false}],
      'no-invalid-this': 'off',
      'no-param-reassign': ['error', {props: false}],
      'no-restricted-syntax': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-void': ['error', {allowAsStatement: true}],
      'prefer-const': ['error', {destructuring: 'all'}],
      // 'sort-imports': 'off',

      // Formatting
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/object-curly-spacing': ['error', 'never'],
      '@stylistic/lines-between-class-members': ['error', {
        enforce: [
          {blankLine: 'never', prev: 'field', next: 'field'},
          {blankLine: 'always', prev: 'method', next: 'field'},
          {blankLine: 'always', prev: 'field', next: 'method'},
          {blankLine: 'always', prev: 'method', next: 'method'}
        ]
      }],
      'prettier/prettier': 'off',

      // Code quality
      '@typescript-eslint/no-invalid-this': 'off', // This rule is already covered by TS compiler
      '@typescript-eslint/no-unused-vars': ['error', {vars: 'all', args: 'none', ignoreRestSiblings: false}],
      // "custom-elements/extends-correct-class": "off",
      // Conflicts when extending other Web Components
      'filenames/match-regex': 'off',
      'i18n-text/no-en': 'off',
      // Allow imports to modules without extension
      'import-x/extensions': ['error',
        {
          js: 'ignorePackages', // Temporary fix for Lit (see https://github.com/import-js/eslint-plugin-import-x/issues/2141)
          ts: 'never',
          jsx: 'never',
          tsx: 'never',
          vue: 'always',

          // Require extension for common assets (based on https://github.com/vitejs/vite/blob/main/packages/vite/src/node/constants.ts)

          // Images
          apng: 'always',
          png: 'always',
          jpg: 'always',
          jpeg: 'always',
          pjpeg: 'always',
          pjp: 'always',
          gif: 'always',
          svg: 'always',
          ico: 'always',
          webp: 'always',
          bmp: 'always',
          tiff: 'always',
          avif: 'always',
          raw: 'always',

          // Media
          mp4: 'always',
          webm: 'always',
          ogg: 'always',
          mp3: 'always',
          wav: 'always',
          flac: 'always',
          aac: 'always',
          oga: 'always',
          m4a: 'always',
          amr: 'always',
          wma: 'always',
          aiff: 'always',
          caf: 'always',
          ac3: 'always',
          opus: 'always',
          mkv: 'always',
          mov: 'always',
          avi: 'always',

          // Fonts
          woff: 'always',
          woff2: 'always',
          eot: 'always',
          ttf: 'always',
          otf: 'always',

          // Stylesheets
          css: 'always',
          scss: 'always',

          // Other
          json: 'always',
          yaml: 'always',
          toml: 'always',
          webmanifest: 'always',
          xml: 'always',
          md: 'always',
          txt: 'always',
          csv: 'always',
          pdf: 'always'
        }
      ],
      'import-x/no-extraneous-dependencies': 'off', // Dependencies are not found when installed with PNPM
      'import-x/no-unresolved': 'off', // This rule doesn't work with relative imports
      'import-x/order': 'off', // Already handled (better) by simple-import-sort/imports
      'import-x/prefer-default-export': 'error',
      'no-restricted-exports': 'off',
      'n/file-extension-in-import': 'off',
      'unicorn/filename-case': 'off'
    }
  }
);
