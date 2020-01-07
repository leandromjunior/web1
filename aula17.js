/* O objeto window representa a janela do browser, todos os objetos globais, variáveis e funções são automaticamente membros do objeto window.
   Se o usuário desejar atribuir uma nova janela a partir da janela já aberta utiliza-se o método open em sua estrutura:
   janela = window.open("url") */
   
   unilasalle = window.open("http://www.unilasalle.edu.br") // Para abrir a primeira janela
   
   janela2=window.open("","","status=yes", "width=150", "height=100") // Para definir o tamanho da segunda janela
   janela2.document.write("<body bgcolor='lightblue'>")
   janela2.document.write("<head><title> Aula 17 </title></head>") // Para definir o título
   janela2.document.write("<center><h1><font face='Verdana' size=12 color='red'> Matéria Nova</center></h1></font>")
   janela2.document.write("<input type='button' name='fechar janela' value='fechar janela' onclick=window.close()>")
  
  //Neste caso não precisa de ";"
  
  //desbloquear pop-up