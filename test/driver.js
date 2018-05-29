import { Builder } from "selenium-webdriver";
import {
  Options,
  ServiceBuilder,
  Driver as _Driver
} from "selenium-webdriver/chrome";
const CHROMEDRIVER_PATH = "/Users/saikrisv/git/lamda-selenium/lib/chromedriver";

class Driver {
  async example(event) {
    var builder = await new Builder().forBrowser("chrome");
    var chromeOptions = await new Options();
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
    await chromeOptions.addArguments(defaultChromeFlags);
    await builder.setChromeOptions(chromeOptions);
    var service = await new ServiceBuilder(CHROMEDRIVER_PATH).build();
    var driver = await _Driver.createSession(chromeOptions, service);
    await driver.get(event);
    let url = await driver.getTitle();
    await console.log("---Current Page URL---" + url);
    await driver.quit();
  }
}

export default Driver;
