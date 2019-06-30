module.exports = {
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                /* We'll leave npm packages as is and not
                   parse them with Babel since most of them
                   are already pre-transpiled anyway. */
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        /* inline if smaller than 10 KB, otherwise load as a file */
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff2?|otf)$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [],
};
