import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "dropdown-pack",
  },
  external: ["react", "react-icons/go", "classnames", "tailwindcss"],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
