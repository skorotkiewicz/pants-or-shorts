module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-empty": "off",
    "no-warning-comments": [
      "warn",
      { terms: ["fixme", "xxx", "todo"], location: "anywhere" },
    ],
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
