function ReverseWord(sen) {
    var reversedWord = '';
    for (var i = sen.length - 1; i >= 0; i--) {
        reversedWord += sen[i];
    }
    return reversedWord;
}

console.log(ReverseWord("this music was good"));