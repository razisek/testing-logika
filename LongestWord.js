function LongestWord(sen) {
    var words = sen.split(' ');
    var longestWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(LongestWord("this music was good"));