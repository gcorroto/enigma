
var expect    = require("chai").expect;
var enigma = require("../app/enigma");

describe("Keyword Converter", function() {
  describe("Java to Ñfaf", function() {
    it("converts First example", function() {
      var java = enigma.encode("Java");
      expect(java).to.equal("Ñfaf");
    });
    it("converts Second example", function() {
        var javascript  = enigma.encode("Javascript ");
        expect(java).to.equal("Ñfafxhwnuy");
    });
  });
});