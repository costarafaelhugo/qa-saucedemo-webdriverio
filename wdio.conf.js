exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-infobars']
        }
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/v1/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    //
    // ===================
    // Services
    // ===================
    services: ['devtools'],
    //
    // ===================
    // Framework
    // ===================
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.

    // onPrepare: function (config, capabilities) {
    // },
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    // before: function (capabilities, specs) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test, context) {
    // },
    // beforeHook: function (test, context, hookName) {
    // },
    // afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
    // },
    // afterTest: function (test, context, { error, result, duration, passed, retries }) {
    // },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function (exitCode, config, capabilities, results) {
    // },
    // onReload: function (oldSessionId, newSessionId) {
    // },
    // beforeAssertion: function (params) {
    // },
    // afterAssertion: function (params) {
    // }
}
