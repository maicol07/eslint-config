declare module 'eslint-plugin-vue-scoped-css' {
  import type {Linter} from 'eslint';

  const defaultExport: {
    configs: {
      'flat/recommended': Linter.Config[];
    };
  };
  // noinspection JSUnusedGlobalSymbols
  export default defaultExport;
}
