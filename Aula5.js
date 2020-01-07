//Operador diferente != (Verifica se os dados são diferentes)

var a=6;
alert("O valor é igual:\u00A0"+(a!="6"));
document.write("O valor é igual?\u00A0"+(a!="6"));

//Operador Identidade diferente !== (Verifica se os dados e os tipos são diferentes)

var b=6;
alert("O valor é igual:\u00A0"+(b!=="6"));
document.write("<br>O valor é diferente?\u00A0"+(b!=="6"));

//Operador Maior > (Para verificar se um valor é maior que o outro)

var c=prompt("Entre com um valor");
alert("O valor é maior que 10?\u00A0"+(c>10));
document.write("<br>O valor é maior que 10?\u00A0"+(c>10));

//Operador Menor < (Para verificar se um valor é menor que o outro)

var c=prompt("Entre com um valor");
alert("O valor é menor que 10?\u00A0"+(c<10));
document.write("<br>O valor é menor que 10?\u00A0"+(c<10));

//Operador maior >= (Para verificar se um valor é maior ou igual que o outro)

var d=prompt("Entre com um valor");
alert("O valor é maior/igual a 10?\u00A0"+(d>=10));
document.write("<br>O valor é maior/igual a 10?\u00A0"+(d>=10));

//Operador Menor <= (Para verificar se o valor é menor ou igual que o outro)

var e=prompt("Entre com um valor");
alert("O valor é menor/igual que 20?\u00A0"+(e<=20));
document.write("<br>O valor é menor/igual que 20?\u00A0"+(e<=20));

//Operadores lógicos  &&(and), ||(or), !(not)

//Operdador And (&&)

var f=4;
alert("O valor é:\u00A0"+((f>=1)&&(f<=10)));
document.write("<br>O valor é?\u00A0"+((f>=1)&&(f<=10)));

var f=prompt("Entre com um valor");
alert("O valor é:\u00A0"+((f>=1)&&(f<=10)));
document.write("<br>O valor é?\u00A0"+((f>=1)&&(f<=10)));

//Operador Or (||)

var f=6;
alert("O valor é:\u00A0"+((f>=1)||(f<=5)));
document.write("<br>O valor é?\u00A0"+((f>=1)||(f<=10)));

//Operador Not (!)

var g=6;
alert("O valor é:\u00A0"+(!(g>=1)));
document.write("<br>O valor é?\u00A0"+(!(g>=1)));



