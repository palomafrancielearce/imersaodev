var paloma = {
    nome: "Paloma",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  };
  //criando um objeto chamado Paloma, dentro das chaves apssamos as propriedades
  
  //console.log(paloma);
  //assim imprimimos o objeto inteiro
  //console.log(paloma.pontos);
  //assim mostramos apenas os pontos
  
  
  var rafaella={
    nome: "rafaella",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  
  rafaella.pontos = calculaPontos(rafaella);
  paloma.pontos = calculaPontos(paloma);
  //atribuindo o valor do retorno dentro do pontos do obj rafaella
  //aqui nao vai aspas pois é objeto
  
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
  }
  
  var jogadores = [rafaella, paloma];
  //nao estamos passando o nome mas sim o objeto, por isso sem as aspas
  
  exibirJogadores(jogadores);
  
  function exibirJogadores(jogadores){
    //nao passamos as chaves, apenas o nome da variavel, seja variavel ou array
    var html= "";
    for(var i = 0; i < jogadores.length;i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>";
      //<tr> é nova linha, <td> é nova coluna
      //+= para ir acrescentando todas as linhas das interações do for
      html += "<td>" + jogadores[i].vitorias + "</td>";
      html += "<td>" + jogadores[i].empates + "</td>";
      html += "<td>" + jogadores[i].derrotas + "</td>";
      html += "<td>" + jogadores[i].pontos + "</td>";
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      //no onClick colocamos o nome de uma função JS que será acionada ao clicar no botão
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
      //tr = table rows - nova linha
      //td = table data - novo dado inserido, cada dado uma nova td
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    //pegando a referencia do componente html
    tabelaJogadores.innerHTML = html;
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadores(jogadores);
  }