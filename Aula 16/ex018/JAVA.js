var res = document.getElementById('res')
var lista = document.getElementById('lista')
var num = document.getElementById('num')
var vet = []
function adicionar(){
    var repetido = false
    if (Number(num.value) <=0 || Number(num.value) > 100){
        alert('[ERRO] Número fora do intervalo exigido!')
    }else{
        for (c=0;c<vet.length;c++){
            if(vet[c] == Number(num.value)){
                repetido = true
                alert('[ERRO] Número anteriormente já adicionado!')
            }
        }
        if (repetido == false){
            var numtxt = document.createElement('option')
            vet.push(Number(num.value))
            numtxt.text = `Valor ${num.value} adicionado`
            lista.appendChild(numtxt)
        }
    }  
    num.value = ''
    num.focus() 
} 
function finalizar(){
   if (vet[1] == ('')){
        alert('[ERRO] Adicione pelo menos dois valores!')
   }else{
        var soma = 0
        var media = 0
        vet.sort()
        for (c=0;c<vet.length;c++){
            soma += Number(vet[c])
        } 
        media = Number(soma)/Number(vet.length)
        res.innerHTML = ('')
        res.innerHTML += (`Ao todo temos ${vet.length} valores cadastrados </br>`)
        res.innerHTML += (`O maior número cadastrado foi o valor ${vet[vet.length-1]}</br>`)
        res.innerHTML += (`O menor número cadastrado foi o valor ${vet[0]}</br>`)
        res.innerHTML += (`A soma entre todos os valores é ${soma}</br>`)
        res.innerHTML += (`A média entre os valores é ${media}</br>`)

   }
}