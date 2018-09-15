module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "legacyDecorators": true
      }
    },
    "rules": {
      "react/jsx-filename-extension": "off"
    },
    "globals": {
      "window": true,
      "document": true
    }
};