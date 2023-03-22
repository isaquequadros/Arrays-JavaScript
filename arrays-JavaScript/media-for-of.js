const notas = [10, 6.5, 8, 7.5];

let somarNota = 0;

for (let nota of notas) {
  somarNota += nota;
}

const media = somarNota / notas.length;

console.log(`A média das notas é ${media}.`);
