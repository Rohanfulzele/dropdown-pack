import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "dropdown-pack",
  },
  external: [
    "react",
    "react-dom",
    "react-icons/go",
    "tailwindcss",
    "classnames",
    "postcss",
    "typescript",
  ],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
