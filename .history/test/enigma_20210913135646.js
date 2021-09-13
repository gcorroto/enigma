
var expect    = require("chai").expect;
var enigma = require("../app/enigma");

describe("Keyword Encoding", function() {
  describe("Test Examples", function() {
    it("Encoding First example", function() {
      var java = enigma.encode("Ñfaf");
      expect(java).to.equal("Java");
    });
    it("Encoding Second example", function() {
        var javascript  = enigma.encode("Ñfafxhwnuy");
        expect(javascript).to.equal("Javascript");
    });
  });

  describe("Encoding Test Enigma", function() {
    it("Enigma Resolution", function() {
        console.log("KJPNE INF IJ PTX UWTLWFQFITWJX".length)
      var result = enigma.encode("KJPNE INF IJ PTX UWTLWFQFITWJX");
      expect(result).to.equal("Ñfaf");
    });
  });
});