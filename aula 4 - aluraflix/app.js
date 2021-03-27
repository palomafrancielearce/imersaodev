var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BOTg2MmZiZDUtZGQ0My00MGNjLTk1ZGUtMTM1OTNhODJjYzdlXkEyXkFqcGdeQXVyNzMxNjA3OTQ@._V1_UY268_CR147,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"];

for(var i=0; i<listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + "></img>");
}