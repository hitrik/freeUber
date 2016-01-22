module.exports = {
    entry: "./content_scripts/main.js",
    output: {
        filename: "./bundle.js"
    },
    devtools: "source-map",
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exlude: /node_modules/,
                plugins: ['transform-runtime'],
                query: {
                    "presets": ["es2015"]
                }
            }
        ]
    }
};