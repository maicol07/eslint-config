module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "plugins": [
        "flowtype",
        "new-with-error",
        "no-secrets",
        "simple-import-sort",
        "switch-case"
    ],
    "extends": [
        "eslint:recommended",
        "airbnb-base",
        "@open-wc/eslint-config",
        "plugin:flowtype/recommended",
        "plugin:github/recommended",
        "plugin:import/recommended",
        "plugin:mithril/recommended",
        "plugin:promise/recommended",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:switch-case/recommended",
        "plugin:unicorn/recommended",
        "plugin:you-dont-need-lodash-underscore/compatible"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "rules": {
        "comma-dangle": [
            "error",
            "never"
        ],
        "class-methods-use-this": "off",
        "eol-last": "off",
        "func-names": "off",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "off",
        "no-restricted-syntax": "off",
        "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
        "object-curly-spacing": "off",
        "sort-imports": "off", // See simple-import-sort plugin

        // Plugins
        //"custom-elements/extends-correct-class": "off", // Conflicts when extending other Web Components
        "filenames/match-regex": "off",
        "flowtype/no-types-missing-file-annotation": "off",
        "github/array-foreach": "off", // Already handled (better) by unicorn/no-array-for-each
        "i18n-text/no-en": "off",
        "import/extensions": ["error",
            {
                "js": "never",
                "png": "always"
            }
        ], // Allow imports to modules without extension
        "import/no-unresolved": "off", // This rule doesn't work with relative imports
        "import/no-extraneous-dependencies": "off",
        "import/order": "off", // Already handled (better) by simple-import-sort/imports
        "mithril/jsx-no-target-blank": "off",
        "new-with-error/new-with-error": "error",
        "no-secrets/no-secrets":"error",
        "no-underscore-dangle": "off",
        "prettier/prettier": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unicorn/filename-case": "off"
    }
}
