var sexo=prompt("Entre com a letra F para feminino e M para masculino");

switch(sexo) {
	case "M"; //Case é a condição
	alert("Masculino");
	break; // Para parar a condição caso a mesma seja verdadeira
	case "F";
	alert("Feminino");
	break;
	default: // É como se fosse o else
		alert("Indefinido");
}

var tecnologia=prompt("Entre com a tecnologia");

switch(tecnologia) {
	case: "Java";
	case:"C++";
	case: "JavaScript";
	case: "C#";
	alert("Linguagem de Programação");
	break;
	
	case: "SQLServer";
	case: "Oracle";
	case: "MySQL";
	case: "postgresql";
	alert("Banco de Dados");
	break;
	
	default:
	alert("Tecnologia Desconhecida");
}

// Array utilizando o método construtor

var frutas=new Array("Maça","Banana","Morango","Abacaxi");
alert(frutas);

// Posição do elemento no Array

var frutas=new Array("Maça","Banana","Morango","Abacaxi");
alert(frutas[2]);

//length - Para mostrar a quantidade de elementos dentro do Array

var frutas=new Array("Maça","Banana","Morango","Abacaxi");
alert("A quantidade de elementos dentro do Array é :"+ frutas.length);

// indexOf - Para identificar qual a posição do elemento dentro do Array

var frutas=new Array("Maça","Banana","Morango","Abacaxi");
alert("A fruta encontra-se na posição :"+ frutas.indexOf("Abacaxi"));

// lastIndexOf - Para mostrar a ultima ocorrência do elemento

var frutas=new Array("Maça","Banana","Morango","Abacaxi","Maça");
alert("A ultima ocorrencia do elemento encontra-se na posição :"+ frutas.lastIndexOf("Maça"));

//Criar um Array usando a sintaxe literal

var frutas=["Maça","Banana","Morango","Abacaxi"];
alert(frutas);

var frutas=["Maça","Banana","Morango","Abacaxi"];
alert("A quantidade de elementos dentro do Array é:"+frutas.length);

//Criar um Array usando o indice

var frutas=new Array();
frutas[0]="Maça";
frutas[1]="Banana";
frutas[2]="Morango";
frutas[3]="Abacaxi";
alert(frutas);

// Uma string tambem pode ser um Array

var s="Açai";
alert(s.length);

// função Reverse - Inverte a ordem dos elementos

var frutas=["Maça","Banana","Morango","Abacaxi"];
alert("As frutas na ordem inversa são:"+ frutas.reverse());

// Função sort - Para colocar em ordem alfabética

var frutas=["Maça","Banana","Morango","Abacaxi"];
alert("As frutas em ordem alfabética são:"+ frutas.sort());

// Cortes e Emendas - Método Join - Para alterar o separador dos elementos do Array

var frutas=["Maça","Banana","Morango","Abacaxi"];
alert(frutas.join(";"));
alert(frutas.join("-"));
alert(frutas.join("♥"));

// Concat - Insere novos elementos no Array

var frutas=["Maça","Banana","Morango","Abacaxi"];
alert(frutas.concat("Açai","Laranja"));

// Splice - Para remover e inserir novos elementos dentro do Array

var frutas=["Maça","Banana","Morango","Abacaxi","Laranja"];
alert(frutas.splice(2,2,"Abacate","mamão","uva","teste"));
alert(frutas);
	