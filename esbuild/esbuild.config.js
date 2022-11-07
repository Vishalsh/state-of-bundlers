require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["../app/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    loader: {
      ".js": "jsx",
      ".jpeg": "dataurl",
      ".html": "text",
    },
    outfile: "dist/index.bundle.js",
  })
  .catch(() => process.exit(1))