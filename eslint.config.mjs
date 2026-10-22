import js from "@eslint/js";
import globals from "globals";
import noSecrets from "eslint-plugin-no-secrets";
import security from "eslint-plugin-security";

export default [
  js.configs.recommended,
  {
    ...security.configs.recommended,
    files: ["**/*.js", "**/*.mjs"],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    plugins: {
      "no-secrets": noSecrets,
    },
    rules: {
      "no-secrets/no-secrets": "error",
      "no-secrets/no-pattern-match": [
        "error",
        {
          patterns: {
            "Sensitive assignment":
              /(?:password|passwd|pwd|secret|api[_-]?key|access[_-]?token|auth[_-]?token)\s*[:=]\s*["'`][^"'`]+["'`]/i,
          },
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
