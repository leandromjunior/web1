var data= new Date();
document.write(data);

var num=0;
var nome;
var email;

function cadastro(Area) {
	info = "Usuario Numero" +(++num) + "\n";
	info += "Nome:" + nome + "\n";
	info += "E-Mail:" + email + "\n"+"\n";
	Area.value += info;
}