// get total of all items in an array
Array.prototype.getTotalOfAllItems = function() {
    let count = 0;
    
    for(let i = 0; i < this.length; i++) {
        count += this[i]
    }

    return count;
}

// having string check itself if it is a palindrome
String.prototype.amIAPalindrome = function() {
    const meReversed = this.split('').reverse().join('');

    return this == meReversed;
}

//have string capitalize first letter of each word
String.prototype.capitalizeFirstLetterOfEachWord = function() {
    const arrayOfWords = this.split(' ');
    let newString = ''
    for(let i = 0; i < arrayOfWords.length; i++) {
        const currentWord = arrayOfWords[i];
        const firstCharacterCapitalized = currentWord[0].toUpperCase();
        const restOfWord = currentWord.slice(1);
        newString += firstCharacterCapitalized + restOfWord + ' ';  
    }
    return newString;
}