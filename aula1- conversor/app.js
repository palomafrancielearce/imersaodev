var valorEmDolar = prompt("Qual valor em dólar deseja converter?");

var valorEmDolarNumero = parseFloat(valorEmDolar);

var valorEmReal = valorEmDolarNumero * 5.50;

valorEmReal = valorEmReal.toFixed(2);

alert(valorEmReal);
