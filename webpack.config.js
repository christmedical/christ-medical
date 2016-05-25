/**
 * Created by jameym on 5/24/16.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',

    entry: {
        app: './src/app/app.js'
        //components: './src/components/components.js',
        //pages: './src/pages/pages.js'
    },

    output: {
        path: path.resolve(__dirname, './src'),
        filename: '[name].js'
    },

    module: {
        // `loaders` is an array of loaders to use.
        // here we are only configuring vue-loader
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            }
        ]
    },

    externals: {
        "vue": "Vue",
        "vuex": "Vuex",
        // "vue-material": "vue-material"
    }

};