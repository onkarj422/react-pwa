/* webpack.config.js */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
    filename: "./index.html"
});

module.exports = {
    /* ... */
    // Tell webpack to begin building its
    // dependency graph from this file.
    entry: path.join(__dirname, 'src', 'index.js'),
    // And to place the output in the `build` directory
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                /* We'll leave npm packages as is and not
                   parse them with Babel since most of them
                   are already pre-transpiled anyway. */
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    /* inline if smaller than 10 KB, otherwise load as a file */
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff2?|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [htmlPlugin]
}
