const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bundleOutputDir = "./wwwroot/dist";

module.exports = env => {
    const isDevBuild = !(env && env.prod);

    return [
        {
            stats: { modules: false },
            context: __dirname,
            entry: { app: './ClientApp/main.ts' },
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        },
                        exclude: /node_modules/
                    },
                    {
                        test: /\.vue$/,
                        include: /ClientApp/,
                        loader: "vue-loader",
                        options: {
                            loaders: {
                                scss: "vue-style-loader!css-loader!sass-loader",
                                sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
                            }
                        }
                    },
                    {
                        test: /\.css$/,
                        use: isDevBuild
                            ? ["style-loader", "css-loader"]
                            : ExtractTextPlugin.extract({ use: "css-loader?minimize" })
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
                path: path.join(__dirname, bundleOutputDir),
                filename: "[name].js",
                publicPath: "dist/"
            },
            resolve: {
                extensions: ['.ts', '.js', '.vue', '.json'],
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                }
            },
            plugins: [
                new ExtractTextPlugin("app.css"),
                new webpack.DefinePlugin({
                    "process.env": {
                        NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production")
                    }
                }),
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require("./wwwroot/dist/vendor-manifest.json")
                })
            ].concat(
                isDevBuild
                    ? [
                        // Plugins that apply in development builds only
                        new webpack.SourceMapDevToolPlugin({
                            filename: "[file].map", // Remove this line if you prefer inline source maps
                            moduleFilenameTemplate: path.relative(
                                bundleOutputDir,
                                "[resourcePath]"
                            ) // Point sourcemap entries to the original file locations on disk
                        })
                    ]
                    : [
                        // Plugins that apply in production builds only
                        new webpack.optimize.UglifyJsPlugin()
                    ]
            )
        }
    ];
};