function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme');
  
  //document.querySelect - utilizamos para referenciar um  componente html, porem ele vai retornar todo o codigo html daquele id passado
  //dentro dele passamos o id do componente que queremos chamar no JS
  var filmeFavorito = campoFilmeFavorito.value;
  //agorando passando .value pegamos apenas o value, vai ignorar o placeholder, o id, o codigo html restante, vai trazer apenas o value do camponente, ou seja, o valor digitado
  //document.write("<img src=" + filmeFavorito + ">");
  //vai adicionar a imagem da url passada no arquivo pelo document.write porém em outra pagina, nao vai adicionar na mesma pagina html
  
  if(filmeFavorito.endsWith(".jpg")){
    //a funcao endsWith vai verificar se o valor da variavel termina por
    //vai retornar true ou false
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Link inválido");
  }
  campoFilmeFavorito.value="";
  //limpando o valor escrito no campo depois de executar e aparecer a imagem na tela
  
  //passando o filme que pegamos do input do html para a outra função processar e adicionar na mesma página a imagem que abriu em outra
  
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  //listaFilmes é uma div para guardar ftodas as imagens
  var elementoFilme = "<img src="+filme+">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  //a funcao innerHTML vai mesclar o conteudo novo com o conteudo do HTML
  
}