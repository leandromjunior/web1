//Criar Data e Hora atual
var data=new Date();
alert(data);
document.write("Data e Hora"+ data);

//Definindo Ano, Mês, Dia, Hora, Minuto, Segundo...
var data=new Date(2018,08); // Ano,Mês (Setembro está definido como mês 8, pois a máquina começa a contar a partir do 0,ou seja, Janeiro.
alert(data);

//Função getHours - Mostra a hora atual (Não vai até 24h, pois começa do 0. É de 0 até 23h.
var data=new Date();
alert(data.getHours());

//Função getUTCHours - Mostra a hora universal
var data=new Date();
alert(data.getUTCHours());

//Função getDate - Mostra o dia do mês atual
var data=new Date();
alert(data.getDate());

//Função getDay - Mostra o dia da semana
var data=new Date();
alert(data.getDay());

//Para mostrar o dia da semana escrito
var data=new Date();
var dia=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta"];
alert(dia[data.getDay()]);
document.write("<br><br>Hoje é:\u00A0"+ dia[data.getDay()]);