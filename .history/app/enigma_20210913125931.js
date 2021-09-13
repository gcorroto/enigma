const encode = (word) => {
    index = alphabet.findIndex(letter => letter == word);
    currentLetter = alphabet[translate(index)];
    return;
}

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const secretChange = 5;

exports.encode = function(word) {

    index = alphabet.findIndex(letter => letter == word);
    currentLetter = alphabet[translate(index)];
    return;
  
  };
  
  const pad = (hex) => {
    return (hex.length === 1 ? "0" + hex : hex);
  }
  

  const translate = (index) => {
    return index + secretChange;
  }