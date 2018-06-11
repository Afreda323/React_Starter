module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "semi": ["off", "always"],
        "quotes": ["error", "single"],
        "import/extensions": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "react/prop-types": 0,
        "linebreak-style": 0,
        "arrow-parens": 0,
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
};