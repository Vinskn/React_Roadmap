import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

// konfigurasi eslint untuk ts dan tsx juga
export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
            semi: ["error", "always"],
        },
    },
]);
