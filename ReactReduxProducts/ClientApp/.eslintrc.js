module.exports = {
    "extends": "react-app",
    "parser": "babel-eslint",
    //required to avoid 'document' is not defined error
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    // "settings": {
    //     "import/resolver": {
    //         "webpack": {
    //             "config": "webpack.config.js"
    //         }    
    //     }
    // },
    "globals": {
        "_debug": false,
    },
    "rules": {

        "max-len": ["error", { "code": 140 }],

        "comma-dangle": "error",
        // by default it's setup on linux linebreak
        "linebreak-style": ["error", "windows"],

        // problem with input inside of label in product tile,
        //TBD - correct to redo styles and remove ths rule
        "jsx-a11y/label-has-for": ["error", {
            "components": ["Label"],
            "required": {
                "some": ["nesting", "id"]
            },
            "allowChildren": false,
        }],

        // we can use tabs
        "no-tabs": "off",

        // tabs should contain 4 spaces
        "indent": ["error", 4, { "SwitchCase": 1 }],

        // this rule leads in some conflict with standard indent rule
        "react/jsx-indent": ["error", 4],
        // this rule leads in some conflict with standard indent rule
        "react/jsx-indent-props": ["error", 4],

        // javascript:void(0) not allowed
        "no-script-url": "error",

        //  'data.profileLinksLoggedIn' is missing in props validation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
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

        // new rules 16.1.0
        "prefer-destructuring": "off", // 60 errors
        "no-restricted-globals": "off", // 13 errors
        "jsx-a11y/click-events-have-key-events": "off", // 6 errors
        "react/no-unused-state": "off", // 13 errors
        "react/default-props-match-prop-types": "off", // 7 errors

        // new rules 17.1.0
        "jsx-a11y/label-has-associated-control": "off", // 1 errors
        "react/destructuring-assignment": "off", // 1634 errors
        "react/button-has-type": "off", // 47 errors
        "react/jsx-one-expression-per-line": "off", // 291 auto errors
        "react/no-access-state-in-setstate": "off", // 43 errors
        "react/sort-comp": "off", // 18 errors
    }
};
