function calcular(){
    var ini = Number(window.document.getElementById('ini').value)
    var fim = Number(window.document.getElementById('fim').value)
    var pul = Number(window.document.getElementById('pul').value)
    var res = window.document.getElementById('res')
    if(ini == '' ){
        window.alert('[ERRO] Coloque um início!')
    }else if (fim == ''){
        window.alert('[ERRO] Coloque um final!')
    }else if(pul < 0){
        window.alert('Coloque um pulo maior do que 0!')
    }else if(pul == ''){
        window.alert('Você não colocou o pulo, então ele foi auto definido para 1!')
        var pul = 1
    }else if (ini == fim){
        window.alert('O início não pode ser igual ao fim!')
    }else{
        res.innerText = ('')
        if(ini < fim){ //contagem crescente
            for(c=ini;c<=fim;c+=pul){
                res.innerText += (`${c}\u{1F448}`)
            }

        }else{
            for(c=ini;c>=fim;c-=pul){
            res.innerText += `${c}\u{1F448}`
            }
        }
        res.innerText += `\u{1F3C1}`
    }
}