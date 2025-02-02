declare module 'eslint-plugin-vue-scoped-css' {
  import {Linter} from 'eslint';

  const defaultExport: {
    configs: {
      'flat/recommended': Linter.Config[]
    }
  };
  // noinspection JSUnusedGlobalSymbols
  export default defaultExport;
}
