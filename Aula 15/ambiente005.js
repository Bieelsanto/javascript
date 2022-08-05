var num = [5, 8, 3]
console.log(`Nosso vetor é o ${num}`)
num.push(6)//adiciona um valor em uma nova vaga
num.length//retorna o tamanho do vetor
num.sort()//coloca em ordem crescente
num.indexOf(3)//diz o índice da matriz
console.log(`adicionando o valor 6, o vetor em ordem crescente fica ${num}`)
console.log(`O primeiro valor é ${num[0]}`)
/*for(c=0;c<num.length;c++){
    console.log(num[c])
}
*/
for (var c in num){
    console.log(`A posição ${Number(c) + 1} tem o valor ${num[c]}.`)
}