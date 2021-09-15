const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/index"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 1204,
        host: "192.168.168.235",
        open: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './index.html'
        }),
    ],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};
