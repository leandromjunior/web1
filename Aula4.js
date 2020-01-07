//abs - Transorma os números negativos em positivos
// Método Math - Para usar junto com os operadores
var valor=Math.abs(-25);
alert("O resultado é:\u00A0"+valor);
document.write("<font color='blue'>O resultado é:\u00A0"+valor+"</font>");

//Max - Retornar o maior valor

var valor=Math.max(12,26);
alert("O maior valor é:\u00A0"+valor);
document.write("<br>O maior valor é:\u00A0"+valor);// O font pode ser fechado antes do comando <br>

//Min - Para retornar o menor valor

var valor=Math.min(33,60);
alert("O menor valor é:\u00A0"+valor);
document.write("<br>O menor valor é:\u00A0"+valor);

//Pow - Potência, Número Elevado

var a=Math.pow(30,2); // O primeiro valor é o número, o segundo é o valor da potência
alert("O resultado é:\u00A0"+a);
document.write("<br> O resultado é:\u00A0"+a);

//Round - Para arredondar o valor

var b=Math.round(30.6);
alert("O valor arredondado é:\u00A0"+b);
document.write("<br>O valor arredondado é:\u00A0"+b);

//sqrt - Raiz Quadrada

var c=Math.sqrt(49);
alert("A raiz quadrada é:\u00A0"+c);
document.write("<br>A raiz quadrada é:\u00A0"+c);

//cbrt - Raiz Cúbica

var c=Math.cbrt(8);
alert("A raiz cúbica é:\u00A0"+c);
document.write("<br>A raiz cubica é:\u00A0"+c);

//Operadores de Comparação
//Operador Igual == (verifica se os dados são iguais)

var x=6;
var y="6";
alert(x==y);

//Operador Igual e Identico === (Verifica se os dados e o tipo são iguais)

var x=6;
var y="6";
alert(x===y);

//Exercícios

/* Ler dois valores reais a partir do prompt, calcular e imprimir na tela:
a) A soma destes valores;
b)O produto deles;
c)O quociente entre eles;
d)A diferença entre eles; */

//A

var n1=(parseInt(prompt("Entre com o valor 1:")));
var n2=(parseInt(prompt("Entre com o valor 2:")));
var soma=n1+n2;
alert("Resultado da soma:\u00A0"+soma);
document.write("<br>Resultado da soma:\u00A0"+soma);

//B

var n1=(prompt("Entre com o valor 1:"));
var n2=(prompt("Entre com o valor 2:"));
var mult=n1*n2;
alert("Resultado da multiplicação:\u00A0"+mult);
document.write("<br>Resultado da multiplicação:\u00A0"+mult);

//C

var n1=(prompt("Entre com o valor 1:"));
var n2=(prompt("Entre com o valor 2:"));
var mod=n1/n2;
alert("O quociente é:\u00A0"+mod);
document.write("<br>O quociente é:\u00A0"+mod);

//D

var n1=(prompt("Entre com o valor 1:"));
var n2=(prompt("Entre com o valor 2:"));
var sub=n1-n2;
alert("O resultado da subtração é:\u00A0"+sub);
document.write("<br>O resultado da subtração é:\u00A0"+sub);

