module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    indent: "off",
    "import/extensions": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "no-console": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".ts", ".tsx"],
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/no-cycle": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
