//Incrementar utilizando texto
var texto="";
for(var i=0; i<10;i++) {
	texto=texto + i +",";
}
alert(texto);
document.write(texto);

//Para Resolver o problema de vírgula no final 

var texto="";

for(var i=0; i<10; i++) {
	if(i==9) {
		texto = texto + i;
	}
	else {
		texto = texto + i + ".";
	}
    }
	alert(texto);
	
// Decrementar utilizando o texto 	

var texto="";

for(var i=10; i>0; i--) {
	if(i==1) {
		texto = texto + i;
	}
	else {
		texto = texto + i + ",";
	}
}
alert(texto);
document.write("<br><br>"+texto);

//Verificar números pares valores entre 0 e 20

var texto="";
var cont=0;
for( var i=0; i<=20; i++) {
	
	if(i%2==0) {
	   if(i==20) {
         texto = texto + i;
}
else {
	texto = texto + i + ",";
}
	}
}
alert(texto);
document.write("<br><br>"+texto);

//While - Enquanto

//Neste código cada número de 0 a 3 aparece em um pop-up diferente
var i=0;
while(i<=3) {
	alert(i);
	i++;
}

//Neste código todos os números de 0 a 3 aparecem juntos no mesmo pop-up(Separados por vírgulas)
var i=0;
var texto="";

while(i<=3) {
	texto = texto + i + ",";
	i++;
}
alert(texto);

//Do While

var i=prompt("Entre com um valor");
//var i=0;
do {
	alert(i);
}
//while("Falso");
while(i<=3) {
	texto = texto + i;
	i++;
}
alert(texto);


//Testando

/* var texto="";
var i=prompt("Entre com um valor");

do {
	texto = texto + i;
	i++;
}

while(i<=3); */

