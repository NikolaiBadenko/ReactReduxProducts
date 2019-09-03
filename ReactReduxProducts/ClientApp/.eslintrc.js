module.exports = {
    "extends": "react-app",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "globals": {
        "_debug": false,
    },
    "rules": {
        "max-len": ["error", { "code": 140 }],
        "comma-dangle": "error",
        "linebreak-style": ["error", "windows"],

        "no-tabs": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }],

        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],

        "no-script-url": "error",

        "react/prop-types": "error",

        //can't use stateless function for entry points
        "react/prefer-stateless-function": "error",

        //no default propTypes required
        "react/require-default-props": "off",

        //sometimes we want to use PropTypes.object when it's a complex object from BE
        "react/forbid-prop-types": "off",

        //problem with long ternary operators on different lines
        "no-unused-expressions": "error",

        //we use hash as a failover for cases when null is passed from BE
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": "error",

        // it has strange befavior, may be depends on content, before error
        "react/jsx-closing-bracket-location": "error",

        // can't find our custom App extension for import
        "import/extensions": "off",

        // can't find our custom App import
        "import/no-unresolved": "off",

        //  'react' should be listed in the project's dependencies, not devDependencies
        "import/no-extraneous-dependencies": "off",

        // make trailing spaces warning instead of errors
        "no-trailing-spaces": "error",

        // make spaces on comments warning instead of errors
        "spaced-comment": "error",

        // required for router 'children' mode
        "react/no-children-prop": "warn",

        "import/no-webpack-loader-syntax": "off",

        "import/prefer-default-export": "off",

        // prevent usage of dangerous jsx properties
        "react/no-danger": "off",

        // require or disallow named function expressions
        "func-names": "off",
    }
};
