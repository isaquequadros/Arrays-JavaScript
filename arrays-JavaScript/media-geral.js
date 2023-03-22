const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculamediaGeral(notasDaSala) {
  const somarNota = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const mediaGeral = somarNota / notasDaSala.length;

  return mediaGeral;
}

console.log(`A média da sala de JavaScript é ${calculamediaGeral(salaJS)}`);
console.log(`A média da sala de Java é ${calculamediaGeral(salaJava)}`);
console.log(`A média da sala de Python é ${calculamediaGeral(salaPython)}`);