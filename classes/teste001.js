class Carro { //Cria classe
    static alerta=true // Static = se mudar um objeto, muda tudo
    constructor(cor,marca,modelo){ //Cria atributos
        this.cor=cor //this = referência ao objeto 
        this.marca=marca //marca = nome do atributo
        this.modelo=modelo //segundo modelo = parâmetro
        this.ligado=false  //false = estado padrão
        this.km=0 
        this.comb=10
    }
    info(){ //função dentro da classe
        console.log(`----------------------------------------`)
        console.log(`Cor........: ${this.cor}`)
        console.log(`Marca......: ${this.marca}`)
        console.log(`Modelo.....: ${this.modelo}`)
        console.log(`Ligado.....: ${this.ligado ? "Sim" : "Não"}`)
        console.log(`KM.........: ${this.km}`)
        console.log(`Combustível: ${this.comb}`)
        console.log(`Alerta.....: ${Carro.alerta ? "Sim!" : "Não!"}`)
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    set setComb(v){ //set=método para definir valor a atributo
        if (v<0 || v>100){
            this.comb=100
        }else{
            this.comb=v
        }
    }
    get getComb(){ //get=método para retornar valor de atributo
        return this.comb
    }
    set setAlerta(n){
        Carro.alerta = n
    }
    get getAlerta(){
        return Carro.alerta
    }
}

let carro1 = new Carro("Vermelho", "Wolksvagen","Sedan")
let carro2 = new Carro("Verde","Ford","Celta")
let carro3 = new Carro("Azul","Tesla","Turbo")
let carro4 = new Carro("Amarelo","Chevrolet","Uno")

carro4.setComb=100
carro4.setAlerta=false
Carro.alerta=false //Static permite mencionar a classe


/* carro1.info()
carro2.info()
carro3.info()
carro4.info() */
Carro.
console.log(`----------------------------------------`)