var build = "./build";
var src = "./src";
var isPretty = true;

module.exports = {
  build: build,

  jade: {
    src: [
      src + "/jade/**/!(_)*.jade"
    ],
    build: build,
    pretty: isPretty
  },

  js: {
    build: build + "/js",
    pretty: isPretty
  },

  // for js
  webpack: {
    entry: src + "/js/main.jsx",
    output: {
      filename: "app.js"
    },
    devtool: "source-map",
    module: {
      loaders: [
        { test: /\.jsx$/, loader: "jsx-loader" }
      ]
    },
    plugins: [
      // see gulp/tasks/webpack.js
    ],
    resolve: {
      extensions: ["", ".js", ".jsx"]
    },
  },

  stylus: {
    src: [
      src + "/styl/**/!(_)*.styl"
    ],
    build: build + "/css/",
    output: "app.css",
    autoprefixer: {
      browsers: ["last 2 versions"]
    },
    pretty: isPretty
  },

  copy: {
    src: [
      src + "/www/**"
    ],
    build: build + "/resources"
  },

  watch: {
    js: src + "/js/**",
    styl: src + "/styl/**",
    jade: src + "/jade/**",
    www: src + "/www/**"
  },
}
