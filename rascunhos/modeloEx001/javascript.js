var num;
try{
    num=prompt("Digite um valor");
    if(num>10){
        throw new Error("Valor inválido! O valor máximo é 10");
    }
}catch(e){
    console.log("ERRO:" + e.message)
    num=10
    document.write();
}finally{
    document.write('Valor: '+num);
}
