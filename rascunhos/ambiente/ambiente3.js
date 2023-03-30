function trocaVogais(string) {
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", " "];
    var novaString = "";
    for (let i = 0; i < string.length; i++) {
        if (vogais.indexOf(string[i]) >= 0) {
            novaString += string[i]
        }else {
        novaString += 'x'
        }
        console.log(vogais.indexOf(string[i]))
    }
    return novaString;
}

class Texto{

    constructor(string){
        this.string = string
        this.vogais = ["a", "o", "A", "O"]
        this.novaString = ""
    }

    trocaVogais(){
        for (let i = 0; i < this.string.length; i++) {
            if (this.vogais.indexOf(this.string[i]) >= 0 && (this.string[i+1] == " " || !this.string[i+1])) {
                this.novaString += 'e'
            }else {
                this.novaString += this.string[i]
            }
        }
        return this.novaString
    }
}

const ajuda = new Texto("Gosto de pipoca")
console.log(ajuda.trocaVogais())
