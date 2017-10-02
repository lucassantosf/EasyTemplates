var curso = {sigla: " K11 ", nome:" Orientação a Objetos em Java "};
var novo_curso = Object.create(curso);

novo_curso.carga_horaria = 36;
// exibe K11
document.write(curso.sigla);
// exibe Orientação a Objetos em Java
document.write(curso.nome);
// exibe undefined
document.write(curso.carga_horaria);

