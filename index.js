'use strict';
var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

exports.executeTest = async (event,context,callback) => {
    let testUrl; 
    testUrl = getTestUrl(event, testUrl);
    var mocha = new Mocha();
    process.env['baseUrl'] = testUrl;
    runMochaTests(mocha);
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "my custom header value" },
        body: "hello world"
    });
};
function runMochaTests(mocha) {
    var testDir = './test/';
    fs.readdirSync(testDir).filter(function (file) {
        return file.substr(-3) === '.js';
    }).forEach(function (file) {
        mocha.addFile(path.join(testDir, file));
    });
    mocha.run(function (failures) {
        process.on('exit', function () {
            process.exit(failures);
        });
    });
}

function getTestUrl(event, testUrl) {
    if (event.queryStringParameters.url === null) {
        testUrl = event.url;
    }
    else {
        testUrl = event.queryStringParameters.url;
    }
    return testUrl;
}

