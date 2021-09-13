
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const secretChange = 5;
const secretLoopEncoding = alphabet.length;
const secretLoopDecoding = alphabet.length - 2;


const translateEncoding = (index) => {
    return ((index + secretChange) <= alphabet.length-1)
    ? (index + secretChange)
    :  ((index + secretChange) - alphabet.length);
  }

  const translateDecoding = (index) => {
    return ((index - secretChange) > -1)
    ? (index - secretChange)
    :  ((index - secretChange) + alphabet.length);
  }

const convertPatron = (word) => {
    let currentWord = "";
    let letters = word.split("");
    if(letters) {
        letters.forEach(element => {
            let currentLetter = element;
            const index = alphabet.findIndex(letter => letter == element.toUpperCase());
            if(index > 0 || element.toUpperCase() === 'A') {
                const isUpper = alphabet.some(letter => letter == element)
                currentLetter = isUpper ? alphabet[translate(index)] : alphabet[translate(index)].toLowerCase();
            }
            currentWord += currentLetter;
        });
    }
    return currentWord;  
}

exports.encode = function(word) {
    for (let index = 0; index <= alphabet.length; index++) {
        word = convertPatron(word);
    }
    return word;  
};

exports.decode = function(word) {
    for (let index = 0; index <= secretLoopDecoding; index++) {
        word = convertPatron(word);
    }
    return word;  
};


