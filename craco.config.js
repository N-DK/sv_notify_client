resolve: {
    alias: {
        process: 'process/browser';
    }
}
plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
];
