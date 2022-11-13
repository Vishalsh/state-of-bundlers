import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import html from '@rollup/plugin-html';

const dependencies = require('../package.json').dependencies;

export default {
  input: "../app/index.js",
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    compact: true,
  },
  external: dependencies,
  manualChunks: {
    vendor: Object.keys(dependencies),
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
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    html(),
  ],
};
