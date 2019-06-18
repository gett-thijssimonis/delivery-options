module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["../myparcel-core/dmp-standards/eslint/eslint-vue.config.js"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
