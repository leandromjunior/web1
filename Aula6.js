/Operador delete - Para remover um elemento

Pessoa={
	nome:"Leandro",
	email:"lemottajr@hotmail.com",
	endereço:"ffffffffff"
}

document.write("O nome é:\u00A0"+(pessoa.nome));
delete Pessoa.nome;
document.write("<br>O email é:\u00A0"+(pessoa.email)); 

//Operador In - indica se existe a propriedade especificada

Pessoa={
	nome:"Leandro",
	email:"lemottajr@hotmail.com",
	endereço:"fffffffff"
}
alert("nome" in Pessoa);
alert("telefone" in Pessoa);

//Operador this - Traz o título da página

alert(this.document.title);

//Operador random - Para trabalhar com números aleatórios

var num=Math.random(); //Traz números entre 0 e 1
document.write("<br>"+num);

var num=Math.floor(Math.random()*100); //Traz números entre 0 e 100
document.write("<br>"+num);

/* Pode-se arredondar os valores de forma matemática usando o comando round, o ceil para arredondar obrigatoriamente para cima. E o floor 
   arredondar obrigatoriamente para baixo*/
   
//Function

function somar(x,y){
	document.write("<br><br>A soma de x e y é igual a:\u00A0"+(x+y));
	}
somar(10,30);
var x=parseInt(prompt("Entre com o valor de X"));
var y=parseInt(prompt("Entre com o valor de Y"));
somar(x,y);

function sub(a,b){
	document.write("<br><br>A subtração de a e b é igual a:\u00A0"+(a-b));
}
sub(14,7);

var a=(prompt("Entre com o valor de A"));
var b=(prompt("Entre com o valor de B"));
sub(a,b);

function mult(c,d){
	document.write("<br><br>A multiplicação entre c e d é igual a:\u00A0"+(c*d));
}
mult(5,10);

var c=(prompt("Entre com o valor de C"));
var d=(prompt("Entre com o valor de D"));
mult(c,d);

function div(z,m){
	document.write("<br><br>A divisão de z e m é igual a:\u00A0"+(z/m));
}
div(50,10);

var z=(prompt("Entre com o valor de Z"));
var m=(prompt("Entre com o valor de M"));
div(z,m);