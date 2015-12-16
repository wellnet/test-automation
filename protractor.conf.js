exports.config = {
    baseUrl: 'http://localhost:3000',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [
        { browserName: 'chrome' }/*,
        { browserName: 'phantomjs' }/*,
        { browserName: 'firefox' } */
    ],

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'features/*.feature'
    ],

    jasmineNodeOpts: {
        showColors: true
    },

    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        format: 'pretty' // or summary
    }
};
