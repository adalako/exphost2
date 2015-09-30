module.exports = {
  entry: './build/index.js',
  output: {
    filename: './web-build/bundle.js',
  },
  loaders: [
    { test: /\.coffee$/, loader: 'coffee-loader' },
    { test: /\.js$/, loader: 'babel-loader' },
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'],
  },

};
