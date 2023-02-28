let wordsCounter = document.getElementById('wordsCounter');
let chars = document.getElementById('chars');
let word = document.getElementById('word');
  
wordsCounter.addEventListener('input', function () {
    // count characters 
    let content = this.value;
    chars.textContent = content.length;
  
    // remove empty spaces from start and end 
    content.trim();
    console.log(content);
  
    let wordList = content.split(/\s/);
  
    // Remove spaces from between words 
    let words = wordList.filter(function (element) {
        return element != "";
    });
  
    // count words 
    word.textContent = words.length;
});