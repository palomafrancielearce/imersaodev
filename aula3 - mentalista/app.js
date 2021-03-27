var numeroSecreto = 3;
var tentativas = 3;
for(var x=0; x< tentativas; x++){
var chute = parseInt(prompt("Digite um número entre 0 e 10"));

if(numeroSecreto == chute){
  console.log("Acertou!");
} else if(numeroSecreto > chute) {
  console.log("Errou. O número secreto é maior");
} else if(numeroSecreto < chute){
    console.log("Errou. O número secreto é menor");
  } else {
    console.log("Errou. O número secreto era " + numeroSecreto);
  }
}