//Operadores - (+,-,*,/,%)
//Soma
var soma=(10+4);
alert("O resultado da soma é:\u00A0"+soma);

//Subtração
var subtração=(20-10);
alert("O resultado da subtração é:\u00A0"+subtração);

//Multiplicação
var mult=(10*5);
alert("O resultado da multiplicação é:\u00A0"+mult);

//Divisão
var div=(50/10);
alert("O resultado da divisão é:\u00A0"+div);

//Resto da Divisão
var mod=(10%2);
alert("O resto da divisão é:\u00A0"+mod);

//Outra maneira de desenvolver operações

alert("O resultado da soma é:\u00A0"+(100+50));
alert("O resultado da subtração é:\u00A0"+(100-50));
alert("O resultado da multiplicação é:\u00A0"+(60*5));
alert("O resultado da divisão é:\u00A0"+(20/2));
alert("O resto da divisão é:\u00A0"+(30%5));

//Entrando com os valores
var n1=parseInt(prompt("Entre com o valor de n1:"));
var n2=parseInt(prompt("Entre com o valor de n2:"));
var soma=n1+n2;
//alert("O resultado da soma é:\u00A0"+(soma));
alert("O resultado é:\u00A0"+(n1+n2));//Outra forma de desenvolver, sem criar a variável soma

//Método de Confirmação
confirm("Tem certeza que deseja salvar?");

//Operador ternário é representado pela expressão (Cria-se a variável=condição?verdadeiro:falso)
var idade=prompt("Qual a sua idade?");
var x=(idade>=18?"maior de idade":"menor de idade");
alert("A condição é:\u00A0"+x);

//Para separar as expressões utilizo a vírgula
var idade=prompt("idade"), sexo=prompt("sexo"), nacionalidade="brasileiro";
var x=(sexo="masculino"?"verdadeiro":"falso");
alert("A condição é:\u0A00"+x);
document.write("A nacionalidade é:\u00A0"+nacionalidade);