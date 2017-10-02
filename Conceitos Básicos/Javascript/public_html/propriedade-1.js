   var curso = {sigla: "K11", nome:" Orientação a Objetos em Java"};
   
   var novo_curso = Object.create(curso);
   
   curso.carga_horaria = 36;
   // exibe K11
   document.write(novo_curso.sigla);
   // exibe Orientação a Objetos em Java
   document.write(novo_curso.nome);
   // exibe 36
   document.write(novo_curso.carga_horaria);