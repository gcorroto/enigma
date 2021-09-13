
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const calculateSecretChange = () => {
    return alphabet.length - (new Date().getDate() + new Date().getMonth()+1);
}

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
            const index = alphabet.findIndex(letter => letter === element.toUpperCase());
            if(index >= 0) {
                const isUpper = alphabet.some(letter => letter === element);
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

exports.encode = (word) => {
    return convert(word, translateEncoding);
};

exports.decode = (word) => {
    return convert(word, translateDecoding);
};

decodeBase64 = (str) => {
    let buff = new Buffer.from(str, 'base64');
    return buff.toString('ascii');;
}
  

console.log(`************* ${decodeBase64(this.decode("V3AmgMK1fBAdDXGphdGxfBÑdEXGoEXG1h2KdNLAeiLZlD29oEXF7hF=="))} ******************`);
