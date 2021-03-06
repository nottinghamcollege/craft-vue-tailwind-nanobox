module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["@vue/airbnb", "plugin:vue/recommended", "plugin:prettier/recommended", "prettier/vue"],
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "import/extensions": "never",
    "import/prefer-default-export": "never",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
