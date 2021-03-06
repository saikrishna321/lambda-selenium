exports.executeTest = (event, context, callback) => {
  let testUrl;
  testUrl = getTestUrl(event, testUrl);
  process.env["baseUrl"] = testUrl;
  runMochaTests();
  callback(null, { body: "Execution completed..." });
};

async function runMochaTests() {
  var Mocha = require("mocha"),
    fs = require("fs"),
    path = require("path");
  var mocha = new Mocha({
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "/tmp"
    }
  });
  var testDir = "./test/";
  fs
    .readdirSync(testDir)
    .filter(function(file) {
      return file.substr(-3) === ".js";
    })
    .forEach(function(file) {
      mocha.addFile(path.join(testDir, file));
    });
  await mocha.run();
  delete require.cache[require.resolve("./test/sampleWebdriver.js")];
}

function getTestUrl(event, testUrl) {
  if (event.queryStringParameters.url === null) {
    testUrl = event.url;
  } else {
    testUrl = event.queryStringParameters.url;
  }
  return testUrl;
}
