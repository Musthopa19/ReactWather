var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],

    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/component/Main.jsx',
            Nav: 'app/component/Nav.jsx',
            Weather: 'app/component/Weather.jsx',
            About: 'app/component/About.jsx',
            Examples: 'app/component/Examples.jsx',
            WeatherForm: 'app/component/WeatherForm.jsx',
            WeatherMessage: 'app/component/WeatherMessage.jsx',
            OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/

        }]
    },

    devtool: 'cheep-module-eval-source-map' // untuk menyamakan posisi source code antara di IDE dengan di Console Browser
}