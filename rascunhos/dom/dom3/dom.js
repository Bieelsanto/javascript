function validar(){
    let frm = document.getElementById("frm")[0].value 
    let par = document.getElementById("output")
    if (frm >= 0 && frm <= 10){
        par.innerHTML = 'Número enviado.'
        console.log('válido')
    }else{
        par.innerHTML = 'Número inválido.'
        console.log('inválido')
    }
    console.log(par)
}