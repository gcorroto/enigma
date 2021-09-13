
var expect    = require("chai").expect;
var enigma = require("../app/enigma");

describe("Keyword Encoding", function() {
  describe("Test Examples", function() {
    it("converts First example", function() {
      var java = enigma.encode("Ñfaf");
      expect(java).to.equal("Java");
    });
    it("converts Second example", function() {
        var javascript  = enigma.encode("Ñfafxhwnuy");
        expect(javascript).to.equal("Javascript");
    });
  });

  describe("Test Enigma", function() {
    it("Enigma Resolution", function() {
        console.log("KJPNE INF IJ PTX UWTLWFQFITWJX".length)
      var result = enigma.encode("KJPNE INF IJ PTX UWTLWFQFITWJX");
      expect(result).to.equal("Ñfaf");
    });
  });
});