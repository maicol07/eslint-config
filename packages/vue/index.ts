import {Linter} from 'eslint';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css';

// noinspection JSUnusedGlobalSymbols
export default [
  ...(pluginVue.configs['flat/recommended'] as Linter.Config[]),
  ...pluginVueA11y.configs['flat/recommended'],
  ...eslintPluginVueScopedCSS.configs['flat/recommended'],
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      'vue/max-attributes-per-line': ['warn', {singleline: 5}],
      'vue/html-closing-bracket-spacing': ['warn', {selfClosingTag: 'never'}],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'any',
          component: 'always'
        }
      }],
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    }
  }
] satisfies Linter.Config[];
