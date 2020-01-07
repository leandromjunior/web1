// 1

alert("Exercicio 1");
document.write("<br> Exercicio 1");

var n1=parseInt(prompt("Entre com o valor de n1"));
var n2=parseInt(prompt("Entre com o valor de n2"));
var soma= n1+n2;

document.write("<br><br>O resultado da soma é:\u00A0"+soma);

if(soma>=20){
	document.write("<br><br><font color='blue'>Maior que 20. Somando mais 8 é igual a:\u00A0"+(soma+8)+"</font>");
}
else{
	document.write("<br><br><font color='red'>Valor menor que 20. Subtrai 5:\u00A0"+(soma-5)+"</font>");
}

// 2

alert("Exercicio 2");
document.write("<br><br>Exercicio 2");

var A=prompt("Entre com o valor de A");
var B=prompt("Entre com o valor de B");
var C=prompt("Entre com o valor de C");


if(A!=B && B!=C && C!=A){
	document.write("<br><br>TRIANGULO ESCALENO");
}

else if(A==B && B==C){
      document.write("<br><br>TRIÂNGULO EQUILÁTERO");
}
else{
	document.write("<br><br>TRINAGULO ISOSCELES");
}

// 3 

alert("Exercicio 3");
document.write("<br><br>Exercicio 3");
var n1=parseInt(prompt("Entre com o valor de n1:"));
var n2=parseInt(prompt("Entre com o valor de n2:"));
var n3=parseInt(prompt("Entre com o valor de n3:"));
var n4=parseInt(prompt("Entre com o valor de n4:"));
var n5=parseInt(prompt("Entre com o valor de n5:"));

var soma=0;
var cont=0;

if(n1>0){
	soma=soma+n1;
}
else{
	cont++;
}

if(n2>0){
	soma=soma+n2;
}
else{
	cont++;
}
if(n3>0){
	soma=soma+n3;
}
else{
	cont++;
}
if(n4>0){
	soma=soma+n4;
}
else{
	cont++;
}
if(n5>0){
	soma=soma+n5;
}
else{
	cont++;
}
document.write("<br><br>soma positivos:"+soma);
document.write("<br><br>Negativos:"+cont);