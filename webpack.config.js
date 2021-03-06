const path = require('path');
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_moduels/,
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path : path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: './',
        port: 5000
    }
};