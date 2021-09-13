
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const secretChange = 5;


const translate = (index) => {
    return ((index + secretChange) <= alphabet.length-1)
    ? (index + secretChange)
    :  ((index + secretChange) - alphabet.length);
  }

exports.encode = function(word) {
    let currentWord = "";
    let letters = word.split("");
    // console.log(letters);
    if(letters) {
        letters.forEach(element => {
            let currentLetter = element; //
            const index = alphabet.findIndex(letter => letter == element.toUpperCase());
            if(index > 0 || element.toUpperCase() === 'A') {
                const isUpper = alphabet.some(letter => letter == element)
                currentLetter = isUpper ? alphabet[translate(index)] : alphabet[translate(index)].toLowerCase();
            }
            currentWord += currentLetter;
        });
    }
    return currentWord;  
};
