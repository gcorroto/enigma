
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const calculateSecretChange = () => {
    return alphabet.length - (new Date().getDate() + new Date().getUTCMonth()+1);
}

console.log(calculateSecretChange());

const secretChange = calculateSecretChange();

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

const convertPatron = (word, translate) => {
    let currentWord = "";
    let letters = word.split("");
    if(letters) {
        letters.forEach(element => {
            let currentLetter = element;
            const index = alphabet.findIndex(letter => letter == element.toUpperCase());
            if(index > 0 || element.toUpperCase() === 'A') {
                const isUpper = alphabet.some(letter => letter == element);
                currentLetter = isUpper ? alphabet[translate(index)] : alphabet[translate(index)].toLowerCase();
            }
            currentWord += currentLetter;
        });
    }
    return currentWord;  
}

const convert = (word, translate) => {
    for (let index = 0; index <= alphabet.length; index++) {
        word = convertPatron(word, translate);
    }
    return word;  
}

exports.encode = function(word) {
    return convert(word, translateEncoding);
};

exports.decode = function(word) {
    return convert(word, translateDecoding);
};


