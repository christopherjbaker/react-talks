module.exports = {
  module: {
    rules: [
      {
        test: [ /\.jpe?g$/, /\.png$/, /\.svg$/ ],
        loader: 'file-loader',
      },
    ],
  },
};
