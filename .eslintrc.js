module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "@stylistic"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".ts", ".tsx"] }],
    "react/function-component-definition": [2, { namedComponents: ["function-expression", "arrow-function"] }],
    "@typescript-eslint/quotes": ["error", "double"],
    "import/no-cycle": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": "off",
    "@stylistic/indent": ["error", 2],
    "@stylistic/quotes": ["error", "double"],
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
