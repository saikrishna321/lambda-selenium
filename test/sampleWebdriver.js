import { assert } from "chai";
import Driver from "./driver";

describe("Sample Webdriver test", function() {
  it("Get Page title test", function() {
    new Driver().example(process.env.baseUrl);
    assert.typeOf("sai", "string");
  });

  it("Failing Test", function() {
    assert.typeOf(1, "string");
  });
});
