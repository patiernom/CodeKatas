module.exports = {
    files: ['gruntfile.js', 'Money/src/**/*.js', 'Money/test/**/*.js'],
    options: {
        // options here to override JSHint defaults
        globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
        },
        reporter: require('jshint-stylish')
    }
};