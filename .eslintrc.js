module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": ["off", "always"],
        "quotes": ["error", "single"],
        "import/extensions": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
};