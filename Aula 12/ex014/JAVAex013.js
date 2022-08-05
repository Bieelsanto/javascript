function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var horas = 11
    msg.innerText = (`São ${horas} horas`)
    if(horas < 12 && horas > 4){
        img.src = "fotomanha.jpg"
        document.body.style.background = 'rgb(142, 196, 212)'
    }else if(horas < 19 && horas >= 12){
        img.src = "fototarde.jpg"
        document.body.style.background = 'rgb(248, 173, 76)'
    }else{
        img.src = "fotonoite.jpg"
        document.body.style.background = 'rgb(15, 0, 68)'

    }
}

