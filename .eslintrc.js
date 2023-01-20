module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "react/prop-types": ["off"],
    "react/jsx-no-bind": ["off"],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["Input"],
        depth: 3,
      },
    ],
  },
};
