var cartaPaulo = {
    nome: "Seiya de pegaso",
    atributo:{
      ataque: 80,
      defesa:50,
      magia:90
    }
    //aqui criamos um objeto dentro de outro objeto
  }
  
  var cartaRafa = {
    nome: "Bulbasauro",
    atributo:{
       ataque:70,
      defesa:65,
      magia:85
    }
    
  };
  
  var cartaGui = {
    nome:"Lorde Darth Vader",
    atributo:{
      ataque: 88,
      defesa: 62,
      magia:90
    }
  };
  var cartaMaquina;
  var cartaJogador;
  var cartas = [cartaPaulo, cartaRafa, cartaGui];
  
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random()*3);
    cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
    
    var numeroCartaJogador = parseInt(Math.random()*3);
    while(numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = parseInt(Math.random()*3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    
    document.getElementById('btnSortear').disabled = true;
    //para desabilitar o botão
    document.getElementById('btnJogar').disabled = false;
    //para habilitar
    exibirOpcoes();
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributo){
      //semelhante ao foreach, para mostrar elemento por elemento de forma mais simples
      opcoesTexto += "<input type='radio' name='atributo' value=' " + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName('atributo');
    //utilizamos o by name pq nao colocamos o id mas sim o nome, por isso
    for(var i = 0; i< radioAtributos.length; i++){
      if(radioAtributos[i].checked){
        //.checked vai pegar o valor selecionado do radio
        //console.log(radioAtributos[i].value);
        return radioAtributos[i].value;
        //vai retornar o value, por isso colocamos o atributo tanto no texto na tela quanto no value, para retornarmos aqui
      }
    }
    
  }
  
  function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    if(cartaJogador.atributo[atributoSelecionado] > cartaMaquina.atributo[atributoSelecionado]){
      //comparando o atributo selecionado do jogador com a máquina
      alert("O jogador venceu!");
    } else if(cartaJogador.atributo[atributoSelecionado] < cartaMaquina.atributo[atributoSelecionado]){
      alert("A máquina venceu!");
    } else{
      alert("Houve um empate!");
    }
    console.log(cartaMaquina);
  }