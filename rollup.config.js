import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "dropdown-pack",
  },
  external: [/node_modules/],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
