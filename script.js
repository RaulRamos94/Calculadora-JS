function limpar(){
    document.getElementById("visor").value="";
}

function unir(valor) {
    document.getElementById("visor").value += valor;
}

function calcular(){
    var resultado = document.getElementById("visor").value;
    document.getElementById("visor").value = eval(resultado)
}
