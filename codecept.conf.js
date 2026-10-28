const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'chrome',
      show: true,
      waitForTimeout: 15000,
      keepCookies: true,
      windowSize: "800x600"
    },
    CustomCommands: {
      require: "./customcommands_helper.js"
    }
  },
  include: {
    I: './steps_file.js',
    LoginPage: "./pages/LoginPage.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'testcafe-codecept',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    tryTo: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}