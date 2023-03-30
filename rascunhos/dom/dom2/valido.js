function valido() {
    frm = document.getElementsByTagName("input")
    for (i=0; i<frm.length-1; i++){
        if(frm[i].value === ""){
            alert("Preencha os campos!")
            return false
        }
    }
}
