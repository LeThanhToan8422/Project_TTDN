import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.ts"] }, // Chỉ kiểm tra các tệp TypeScript
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ["dist/"] }, // Bỏ qua thư mục chứa tệp biên dịch
];
