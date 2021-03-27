var primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
var segundoValor = parseInt(prompt("Digite o segundo valor:"));

var operacao = parseInt(prompt("Qual operação deseja realizar? 1- soma 2-subtração 3- multiplicacao 4-divisao"));
var resultado=0;
var operador = "";
switch(operacao){
  case 1:
    resultado = primeiroValor+segundoValor;
    operador = " + ";
    break;
  case 2:
    resultado = primeiroValor - segundoValor;
    operador=" - ";
    break;
  case 3:
    resultado = primeiroValor * segundoValor;
    operador=" X ";
    break;
  case 4:
    resultado = primeiroValor / segundoValor;
    operador = " / ";
    break;
}

document.write("<h2>" + primeiroValor + operador + segundoValor + " = " + resultado + "</h2>");nnn