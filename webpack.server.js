const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // import webpack that we are building a bundle for nodejs, rather than for the browser
    target: 'node',

    // tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}

module.exports = merge(baseConfig, config)