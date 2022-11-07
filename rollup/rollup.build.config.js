import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "../app/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true, 
    compact: true,
  },
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    postcss({
      extensions: [".css"],
    }),
    image(),
    commonjs(),
    terser(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
