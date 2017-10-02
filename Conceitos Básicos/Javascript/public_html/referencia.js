var curso= {sigla:" K11 ", nome:" Orientação a Objetos em Java "};

// exibe K11
document.write(curso.sigla);

// exibe Orientação a Objetos em Java
document.write(curso.nome);

var x = curso;

x.sigla= "K12";
x.nome= " Desenvolvimento Web com JSF2 e JPA2";
document.write("<br>");
// exibe K12
document.write(curso.sigla);
// exibe Desenvolvimento Web com JSF2 e JPA2
document.write(curso.nome);