

function changeText(id){
	id.innerHTML="Olá";
}


function displayDate() {
	document.getElementById("demo").innerHTML=Date();
}


//Aribuir evento onmouseover (passar) e onmouseout (sair)

function mOver(obj){
	obj.innerHTML="Nice!";
}

function mOut(obj) {
	obj.innerHTML="Passe o Mouse Aqui";
}

// Atribuir evento onmousedown e onmouseup

function mDown(obj) {
	obj.style.backgroundColor="#FF9C7"; //style chamando o css para dentro do js ; background-color em js é tudo junto e com sinal de "=" no final
	obj.innerHTML="Bom Feriado!";
}

function mUp(obj){
	obj.style.backgroundColor="#00FFFF";
	obj.innerHTML="Feliz Dia das Crianças";
}

//Atribui o evento duplo clique

function myfunction() {
	document.getElementById("demo1").innerHTML="Hoje o dia está bonito";
}