function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
  
    var valorEmReal = valorEmDolar * 5.25;
    console.log(valorEmReal);
  
    var ElementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Real é R$ " + valorEmReal;
    ElementoValorConvertido.innerHTML = valorConvertido;
  }
  
 function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuro = parseFloat(valor);

    var valorEmReal = valorEmEuro * 6.20;
    console.log(valorEmReal);

    var ElementoEuroConvertido = document.getElementById("EuroConvertido");
    var EuroConvertido = "O resultado em Real é R$ " + valorEmReal;
    ElementoEuroConvertido.innerHTML = EuroConvertido;

  }

  function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmBitcoin = parseFloat(valor);

    var valorEmReal = valorEmBitcoin * 0.0000040;
    console.log(valorEmReal);

    var ElementoBitcoinConvertido = document.getElementById("valorConvertido")
    var BitcoinConvertido = "O resultado em Real é R$ " + valorEmReal;
    ElementoBitcoinConvertido.innerHTML = BitcoinConvertido;
  }  