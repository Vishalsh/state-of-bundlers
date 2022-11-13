import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

export default {
  input: "../app/index.js",
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      historyApiFallback: true,
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    postcss({
      extensions: [".css"],
    }),
    image(),
    commonjs(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
