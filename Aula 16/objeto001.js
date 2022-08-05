let amigo = {nome: 'José', //variável com chaves cria um objeto
sexo:'M',// "asdfg:" é um atributo, e o que vem depois é o estado do atributo.
peso: 60,
engordar(p=0){//é possível adicionar funções dentro de um objeto
    console.log('Engordou!')
    this.peso += p
}}
console.log(amigo.peso)
amigo.engordar(5)
console.log(amigo.peso)