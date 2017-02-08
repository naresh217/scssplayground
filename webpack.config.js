var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
      loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')}
      ]
    },
    plugins: [
       new ExtractTextPlugin("style.css")
   ]
}
