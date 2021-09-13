
var expect    = require("chai").expect;
var enigma = require("../app/enigma");

describe("Keyword Converter", function() {
  describe("Test Examples", function() {
    it("converts First example", function() {
      var java = enigma.encode("Java");
      expect(java).to.equal("Ñfaf");
    });
    it("converts Second example", function() {
        var javascript  = enigma.encode("Javascript");
        expect(javascript).to.equal("Ñfafxhwnuy");
    });
  });

  describe("Test Enigma", function() {
    it("Enigma Resolution", function() {
      var result = enigma.encode("KJPNE INF IJ PTX UWTLWFQFITWJX");
      expect(result).to.equal("Ñfaf");
    });
  });
});