var string = ('Eu nasci menino e me identifico como menino também. Sou do sexo masculino')
var novaString = ''
for (let i = 0; i < string.length-1; i++) {
    if (Number(string[i+1].charCodeAt()) == 32) {
        if(string[i] == 'a' || string[i] == 'o'){
            novaString += 'x'
        }else{
            novaString += string[i]
        }
    }else{
        novaString += string[i]
    }
}
if (string[string.length-1] == 'a' || string[string.length-1] == 'o'){
    novaString += 'x'
}else{
    novaString += string[string.length-1]
}
console.log(`Esta é a mensagem original: ${string}`)
console.log(`Esta é a mensagem nova: ${novaString}`)