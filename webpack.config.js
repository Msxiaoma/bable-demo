const path = require('path')
module.exports = {
    entry: [
        path.join(__dirname, './src/index.js')
    ],
    output: {
        path: path.join(__dirname, './build'),
        filename: 'index.bundle.js'
    },
    mode: 'development',
    devtool: '',
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: ['babel-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            }
        ]
    },
};