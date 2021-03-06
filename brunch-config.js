// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      "vendor.js": /^(?!app)/, // Files that are not in `app` dir.
      "app.js": /^app/,
    },
  },
  stylesheets: {
    joinTo: {
      "app.css": [
        (path) => path.includes(".scss"),
        (path) => path.includes(".css"),
      ],
    },
  },
}

exports.plugins = {
  sass: {
    precision: 8,
    mode: "native",
    sourceMapEmbed: true,
    includePaths: [],
  },
  imagemin: {
    plugins: {
      "imagemin-gifsicle": true,
      "imagemin-jpegtran": true,
      "imagemin-optipng": true,
      "imagemin-svgo": true,
    },
    pattern: /\.(gif|jpg|jpeg|jpe|jif|jfif|jfi|png|svg|svgz)$/,
  },
  copycat: {
    // fonts: [
    //   "node_modules/@mithril-icons/clarity/cjs"
    //   "bower_components/material-design-iconic-font",
    //   "bower_components/font-awesome/fonts"
    // ],
    images: ["app/assets/images"],
    verbose: true, //shows each file that is copied to the destination directory
    onlyChanged: true, //only copy a file if it's modified time has changed (only effective when using brunch watch)
  },
  terser: {
    mangle: true,
    compress: {
      global_defs: {
        DEBUG: false,
      },
    },
  },
  workbox: {
    globDirectory: "docs/",
    globPatterns: ["**/*.*"],
    swDest: "docs/sw.js",
  },
  "@babel": { presets: ["env"] },
}

exports.paths = {
  public: "docs",
  watched: ["app", "app/components", "app/pages", "app/assets"],
}

exports.npm = {
  enabled: true,
  globals: { m: "mithril", Stream: "mithril-stream" },
}
