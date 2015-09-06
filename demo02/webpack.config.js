module.exports = {
  entry: {
    bundle1: './main1.js'
  },
  output: {
    filename: '[name].js'
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: "style!css!autoprefixer" }
    ]
  }
};
