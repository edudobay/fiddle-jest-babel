module.exports = {
    "presets": [
        "@vue/app",
        ["@babel/env", {
            loose: false,
            ignoreBrowserslistConfig: false,
            exclude: [
                'es6.array.iterator',
                'es6.promise',
                'es7.promise.finally'
            ]
        }]
    ]
}
