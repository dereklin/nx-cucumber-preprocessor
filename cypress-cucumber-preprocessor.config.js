const path = require("path")

const outputFolder = path.resolve(process.cwd(), "../../cyreport/cucumber-json")

module.exports = {
  nonGlobalStepDefinitions: false,
  supportFile: false,
  stepDefinitions: [
    path.resolve(process.cwd(), "./src/e2e/[filepath]/**/*.{js,ts}"),
    path.resolve(process.cwd(), "./src/e2e/[filepath].{js,ts}"),
    path.resolve(process.cwd(), "./src/support/step_definitions/**/*.{js,ts}"),
  ],
  cucumberJson: {
    generate: true,
    outputFolder: outputFolder,
    filePrefix: '',
    fileSuffix: '.cucumber',
  },
};
