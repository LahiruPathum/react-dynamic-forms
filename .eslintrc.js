module.exports = {
    rules: {
      // enable additional rules
      "prettier/prettier": ["error", {
         "endOfLine": "auto"
      }]
    },
    env: {
      commonjs: true,
      node: true,
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ["react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"],
    globals: {},
    parser: "babel-eslint",
    parserOptions: {
      sourceType: "module",
    },
    plugins: ["react", "import", "react-hooks"],
    ignorePatterns: ["node_modules/"],
    settings: {
      react: {
        version: "latest", // "detect" automatically picks the version you have installed.
      },
    },
};