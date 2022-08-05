function exibir(){
    var res = window.document.getElementById('res')
    var num = Number(window.document.getElementById('num').value)
    res.innerText = ('')
    for(c=1;c<=9;c++){
        var sel = document.createElement('option')
        sel.text = `[${num}]  x  [${c}] = ${num*c}`
        res.appendChild(sel)

    }
}