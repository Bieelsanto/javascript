var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var diaSem = data.getDay()
if(horas>12) {
    horas -= 12
    minutos += "PM"
}else{
    minutos += "AM"
}
switch(diaSem) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
}
console.log(`E são ${horas}:${minutos}`)