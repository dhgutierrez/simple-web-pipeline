import js from "@eslint/js";

export default [
  {
    ignores: ["dist/**", "node_modules/**"]
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        document: "readonly",
        MutationObserver: "readonly",
        fetch: "readonly"
      }
    }
  }
];