const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'bundle': path.resolve(__dirname, './src/js/index.js'),
    'contact': path.resolve(__dirname, './src/js/contact.js'),
    'style.css': path.resolve(__dirname, './src/scss/index.scss')
  },   
  output: {
    path: path.resolve(__dirname, './docs/'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        }
    ]
  },
  plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({ 
          filename: 'css/[name]'
      }),
  ],
};

