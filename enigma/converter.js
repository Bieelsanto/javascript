function WordToNumber(word){

    return word.charCodeAt(0)-96
}

function NumberToWord(number){
    
    return String.fromCharCode(number+64).toLowerCase()
}

console.log(WordToNumber('a'))
console.log(NumberToWord(1))