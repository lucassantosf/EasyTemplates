var curso = {sigla: " K11 ", nome: " Orientação a Objetos em Java "};
var novo_curso = Object.create(curso);

novo_curso.sigla = " K12 ";
novo_curso.nome = " Desenvolvimento Web com JSF2 e JPA2 ";
// exibe K12
document.write(novo_curso.sigla,"<br>");
// exibe Desenvolvimento Web com JSF2 e JPA2
document.write(novo_curso.nome,"<br>");

curso.sigla = " K21 ";
curso.nome = " Persistencia com JPA2 e Hibernate ";
// exibe K12
document.write(novo_curso.sigla,"<br>");
// exibe Desenvolvimento Web com JSF2 e JPA2
document.write(novo_curso.nome,"<br>");

