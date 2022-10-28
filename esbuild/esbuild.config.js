require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["../app/index.js"],
    bundle: true,
    loader: {
      ".js": "jsx",
      ".jpeg": "dataurl",
      ".html": "text",
    },
    outfile: "dist/index.bundle.js",
  })
  .catch(() => process.exit(1))