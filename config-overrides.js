const webpack = require('webpack');
const { override, addWebpackPlugin } = require('customize-cra');

module.exports = override(
    addWebpackPlugin(
        new webpack.DefinePlugin({
            process: { env: {} },
        }),
    ),
);
