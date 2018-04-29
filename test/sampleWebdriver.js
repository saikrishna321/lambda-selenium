var assert = require("chai").assert;
var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
const CHROMEDRIVER_PATH = "/var/task/lib/chromedriver";

describe("Sample Webdriver test", function() {
  it("Get Page title test", function() {
    example(process.env.baseUrl);
    assert.typeOf("sai", "string");
  });

  it("Failing Test", function() {
    assert.typeOf(a, "string");
  });
});

async function example(event) {
  var builder = new webdriver.Builder().forBrowser("chrome");
  var chromeOptions = new chrome.Options();
  const defaultChromeFlags = [
    "--headless",
    "--disable-gpu",
    "--window-size=1280x1696", // Letter size
    "--no-sandbox",
    "--user-data-dir=/tmp/user-data",
    "--hide-scrollbars",
    "--enable-logging",
    "--log-level=0",
    "--v=99",
    "--single-process",
    "--data-path=/tmp/data-path",
    "--ignore-certificate-errors",
    "--homedir=/tmp",
    "--disk-cache-dir=/tmp/cache-dir"
  ];
  chromeOptions.addArguments(defaultChromeFlags);
  builder.setChromeOptions(chromeOptions);
  var service = new chrome.ServiceBuilder(CHROMEDRIVER_PATH).build();
  var driver = chrome.Driver.createSession(chromeOptions, service);
    await driver.get(event);
    let url = await driver.getTitle();
    console.log("Cuurent Page URL" + url);
    driver.quit();
}
