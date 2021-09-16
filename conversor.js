function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
  
    var valorEmReal = valorEmDolar * 5.27;
    console.log(valorEmReal);
  
    var ElementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em real é R$ " + valorEmReal;
    ElementoValorConvertido.innerHTML = valorConvertido;
  }
  
 function Converter() {
    var valorEuro = document.getElementById("valor");
    var valor = valorEuro.value;
    var valorEmEuro = parseFloat(valor);

    var valorReal = valorEmEuro * 6.20;
    console.log(valorReal);

    var elementoEuroConvertido = document.getElementById("valorConvertidoEUR");
    var valorConvertidoEUR = "O resultado em Real é R$ " + valorReal;
    elementoEuroConvertido.innerHTML= valorConvertidoEUR;
  }