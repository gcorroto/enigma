const encode = (word) => {
    index = alphabet.findIndex(letter => letter == word);
    currentLetter = alphabet[index];
}

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


exports.rgbToHex = function(red, green, blue) {

    var redHex   = red.toString(16);
    var greenHex = green.toString(16);
    var blueHex  = blue.toString(16);
  
    return pad(redHex) + pad(greenHex) + pad(blueHex);
  
  };
  
  const pad = (hex) => {
    return (hex.length === 1 ? "0" + hex : hex);
  }
  

  const secret = () => {

  }