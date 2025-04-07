import antfu from '@antfu/eslint-config';
import {configs as litConfigs} from 'eslint-plugin-lit';
import {configs as regexpConfigs} from 'eslint-plugin-regexp';
import sonarJs from 'eslint-plugin-sonarjs';
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css';
import {configs as wcConfigs} from 'eslint-plugin-wc';
import globals from 'globals';

export default antfu({
  vue: {
    a11y: true
  },

  typescript: {
    tsconfigPath: 'tsconfig.json'
  },

  rules: {
    'func-names': ['error', 'as-needed'],
    'no-param-reassign': ['error', {props: false}],
    'no-plusplus': 'off',
    'no-return-assign': 'error',
    'no-void': ['error', {allowAsStatement: true}]
  },
  languageOptions: {
    globals: {
      ...globals.browser
    }
  }
}, wcConfigs['flat/recommended'], wcConfigs['flat/best-practice'], litConfigs['flat/recommended'], regexpConfigs['flat/recommended'], sonarJs.configs.recommended, ...eslintPluginVueScopedCSS.configs['flat/recommended'])
  .override('antfu/stylistic/rules', {
    rules: {
      'style/arrow-parens': ['error', 'always'],
      'style/block-spacing': ['error', 'never'],
      'style/comma-dangle': ['error', 'never'],
      'style/member-delimiter-style': 'error',
      'style/object-curly-spacing': ['error', 'never'],
      'style/semi': ['error', 'always'],
      'style/lines-between-class-members': ['error', {
        enforce: [
          {blankLine: 'never', prev: 'field', next: 'field'},
          {blankLine: 'always', prev: 'method', next: 'field'},
          {blankLine: 'always', prev: 'field', next: 'method'},
          {blankLine: 'always', prev: 'method', next: 'method'}
        ]
      }]
    }
  })
  .override('antfu/unicorn/rules', {
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': ['error', {replacements: {props: false}}]
    }
  })
  .override('antfu/vue/rules', {
    rules: {
      'vue/html-closing-bracket-spacing': ['warn', {selfClosingTag: 'never'}],
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'any',
          component: 'always'
        }
      }],
      'vue/no-deprecated-slot-attribute': 'off'
    }
  });
