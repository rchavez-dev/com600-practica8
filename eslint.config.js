module.exports = [
  {
    files: ["src/**/*.js", "tests/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        Buffer: "readonly",
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly"
      }
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn"
    }
  }
];
