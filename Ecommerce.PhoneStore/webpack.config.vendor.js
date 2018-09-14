const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
    const isDevBuild = !(env && env.prod);
    const extractCSS = new ExtractTextPlugin("vendor.css");

    return [
        {
            stats: { modules: false },
            resolve: { extensions: [".js"] },
            entry: {
                vendor: [
                    "event-source-polyfill",
                    "axios",
                    "vue",
                    "vuex",
                    "vue-router",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap-vue",
                    "nprogress/nprogress.css",
                    "@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css",
                    "@deveodk/vue-toastr"
                ]
            },
            module: {
                rules: [
                    {
                        test: /\.css(\?|$)/,
                        use: extractCSS.extract({
                            use: isDevBuild ? "css-loader" : "css-loader?minimize"
                        })
                    },
                    {
                        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot|ico)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            output: {
                path: path.join(__dirname, "wwwroot", "dist"),
                publicPath: "dist/",
                filename: "[name].js",
                library: "[name]_[hash]"
            },
            plugins: [
                extractCSS,
                new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
                new webpack.DefinePlugin({
                    "process.env.NODE_ENV": isDevBuild ? '"development"' : '"production"'
                }),
                new webpack.DllPlugin({
                    path: path.join(__dirname, "wwwroot", "dist", "[name]-manifest.json"),
                    name: "[name]_[hash]"
                })
            ].concat(isDevBuild ? [] : [new webpack.optimize.UglifyJsPlugin()])
        }
    ];
};