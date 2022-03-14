var valorElemento = document.querySelector("input#valor")
var conversao = document.querySelector("h2#valorConvertido")

var dolar = 5;

function converter() {    
    var valorReal = Number(valorElemento.value)
    var real = valorReal * dolar;
    conversao.innerHTML = `R$ ${real} reais`
}