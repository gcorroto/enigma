
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const secretChange = 5;


const translate = (index) => {
    index
    return index + secretChange <= alphabet.length-1 ? index + secretChange :  ((index + secretChange) - alphabet.length-1);
  }

exports.encode = function(word) {
    let currentLetter = word;
    const index = alphabet.findIndex(letter => letter == word);
    if(index > 0) {
        currentLetter = alphabet[translate(index)];
    }
    return currentLetter;  
};
