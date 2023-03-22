const alunos = ["Jose", "Julia", "Mariana", "Fabio"];
const medias = [10, 8, 7.5, 9];

const listarAlunoEaMedia = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listarAlunoEaMedia[0].includes(aluno)) {
    const [alunos, medias] = listarAlunoEaMedia;

    const indice = alunos.indexOf(aluno);

    const mediaAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaAluno}.`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Mariana");
