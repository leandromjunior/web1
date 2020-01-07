//Fila Fifo ( first in first out )
//Metodo Push - Adiciona elementos no final da fila (Array)
var aluno=["Lais","Sarah","Anie","Arthur"];
document.write("A quantidade de elementos é:\u00A0" + aluno.push("Mario"));
document.write("<br> A nova lista é:\u00A0" + aluno);

//Método Shift - Para remover o primeiro elemento da fila (Array)
var aluno=["Lais","Sarah","Anie","Arthur"];
document.write(aluno.shift());
document.write("<br><br>A nova lista é:\u00A0" + aluno);

//Método Pop - Apaga o último elemento da fila (Array)
var aluno=["Lais","Sarah","Anie","Arthur"];
document.write(aluno.pop());// Como não houve adição de elementos, não precisa escrever nada dentro do document, apenas o comando e o parametro "()" 
document.write("<br><br>A nova lista é:\u00A0"+ aluno);

//Método Unshift - Adiciona elementos no início da fila (Array)
var aluno=["Lais","Sarah","Anie","Arthur"];
document.write("<br><br>A quantidade de elementos na fila é:\u00A0"+ aluno.unshift("Juliana"));/*Quando for para add elementos, escrever o comando e o elemento 
                                                                                                 entre parenteses*/
document.write("<br><br>A nova lista é:\u00A0"+ aluno);

//Função Every - Verifica se todos os elementos satisfazem a avaliação que foi submetida
var aluno=["Lais","Sarah","Anie","Arthur"];
function todos(elem,ind,obj) {
	return(typeof elem=="string");
}
document.write("<br><br> Os elementos atendem a todas as avaliações?\u00A0"+ aluno.every(todos));

//Exemplo de Falso
var aluno=["Lais","Sarah","Anie","Arthur",1234];
function todos(elem,ind,obj) {
	return(typeof elem=="string");
}
document.write("<br><br>Os elementos atendem a todas as avaliações?\u00A0"+ aluno.every(todos));

//Função some - Verifica se pelo menos um elemento da fila satisfaz a avaliação
var aluno=["Lais","Sarah","Anie","Arthur",1234];
function diferente(elem,ind,obj){
	return(typeof elem=="number");
}
document.write("<br><br> Os elementos atendem a todas as avaliações?\u00A0"+ aluno.some(diferente));

//Exemplo de Falso
var aluno=["Lais","Sarah","Anie","Arthur"];
function diferente(elem,ind,obj){
	return(typeof elem=="number");
}
document.write("<br><br>Os elementos atendem a todas as avaliações?\u00A0"+ aluno.some(diferente));

//Função Filter - Filtra o Array com base na busca que foi submetida
var fruta=["Maça","Banana","Morango","Laranja","Uva"];
function lista(elem,ind,obj){
	return(elem.indexOf("an")>0); // Aparece apenas elementos com "an" no nome
}
document.write("<br><br>As frutas que contém AN no nome são:\u00A0"+ fruta.filter(lista));

