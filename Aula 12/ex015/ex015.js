function verificar(){ 
    var aux1 = new Date()
    var anoAtual = aux1.getFullYear()
    var anoUser = document.getElementById('ano').value
    var idade = Number(anoAtual) - Number(anoUser)
    var res = document.getElementById('res')
    var fsex = window.document.getElementsByName('radsex')
    if(idade < 0){
        res.innerText = ('Você é um viajante do tempo?')
    }else if(idade > 140){
        res.innerText = (`Se você tem ${idade} anos de idade eu sou o batman`)
    }else{
        var img = document.createElement('img')
        img.setAttribute("id", "imagem")
        res.style.textAlign = 'center'
        if(fsex[0].checked){
            res.innerHTML = (`Detectamos uma pessoa do sexo masculino com ${idade} anos`)
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src','homemcrianca.jpg')
            }else if(idade < 21){
                img.setAttribute('src','homemjovem.jpg')
            }else if(idade < 60){
                img.setAttribute('src','homemadulto.jpg')
            }else{
                img.setAttribute('src', 'homemidoso.jpg')
            }
        }else{
            res.innerHTML = (`Detectamos uma pessoa do sexo feminino com ${idade} anos`)
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src','mulhercrianca.jpg')
            }else if(idade < 21){
                img.setAttribute('src','mulherjovem.jpg')
            }else if(idade < 60){
                img.setAttribute('src','mulheradulto.jpg')
            }else{
                img.setAttribute('src', 'mulheridoso.jpg')
            }
        }
    }
    res.appendChild(img)
}